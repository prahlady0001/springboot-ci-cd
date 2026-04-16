pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'docker-cred'
        IMAGE_NAME = 'prahladdev/springboot-app'
        EC2_IP = '13.235.18.11'
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/prahlady0001/springboot-ci-cd.git'
            }
        }

        stage('Build JAR') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-cred', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy to App Server') {
            steps {
                sshagent(['ec2-key']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ubuntu@${EC2_IP} '
                    docker pull ${IMAGE_NAME}
                    docker stop app || true
                    docker rm app || true
                    docker run -d -p 8081:8081 --name app --restart=always ${IMAGE_NAME}
                    '
                    """
                }
            }
        }
    }
}