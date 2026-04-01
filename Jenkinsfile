pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/<username>/springboot-ci-cd.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t <dockerhub-username>/app:latest .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh 'docker push <dockerhub-username>/app:latest'
            }
        }

        stage('Deploy to App Server') {
            steps {
                sh '''
                ssh ubuntu@<APP_PUBLIC_IP> \
                "docker pull <dockerhub-username>/app:latest && \
                docker stop app || true && \
                docker rm app || true && \
                docker run -d -p 8080:8080 --name app <dockerhub-username>/app:latest"
                '''
            }
        }
    }
}