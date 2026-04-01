pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t prahladdev/app:latest .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh 'docker push prahladdev/app:latest'
            }
        }

        stage('Deploy to App Server') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no ubuntu@16.16.128.99 \
                "docker pull prahladdev/app:latest && \
                docker stop app || true && \
                docker rm app || true && \
                docker run -d -p 8080:8080 --name app prahladdev/app:latest"
                '''
            }
        }
    }
}