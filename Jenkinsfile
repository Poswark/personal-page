@Library('shared-library') _

pipeline {
    agent {
        kubernetes {
            yaml kanikoTemplate()   // ← aquí usas el método de tu librería
        }
    }
    environment {
        REPO_URL = 'https://github.com/Poswark/personal-page.git'
        BRANCH = 'trunk'
    }
    parameters {
        string(name: 'IMAGE_NAME', defaultValue: 'personal-page', description: 'Image name')
        string(name: 'TAG', defaultValue: '0.0.1', description: 'Image version')
    }
    stages {
        
        stage('Clone Repository') {
            steps {
                git url: "${REPO_URL}", branch: "${BRANCH}"
                sh "ls -ltr ${WORKSPACE}"
            }
        }
        stage('Build with Kaniko') {
            steps {
                container('kaniko') {
                    sh '''
                        IMAGE_NAME=${IMAGE_NAME}
                        IMAGE_TAG=${TAG}
                        /kaniko/executor \
                          --context=${WORKSPACE} \
                          --dockerfile=Dockerfile \
                          --destination=poswark/${IMAGE_NAME}:${IMAGE_TAG} \
                          --verbosity=info \
                          --skip-tls-verify
                    '''
                }
            }
        }

        stage('Scan with Trivy') {
            agent {
                kubernetes {
                    yaml trivyTemplate()
                }
            }
            steps {
                container('trivy') {
                    sh """
                        trivy image --insecure poswark/${params.IMAGE_NAME}:${params.TAG}
                    """
                }
            }
        }


        stage('Scan with Gitleaks') {
            agent {
                kubernetes {
                    yaml gitleaksTemplate()
                }
            }
            steps {
                container('gitleaks') {
                    sh """
                       mkdir -p results
                       git clone ${REPO_URL} --branch ${BRANCH} repo
                       cd repo
                       gitleaks detect \
                          --source . \
                          --report-path ../results/gitleaks-report.json \
                          --report-format json \
                          --verbose || true
                        
                    """
                }
            }
        }
    }
}
