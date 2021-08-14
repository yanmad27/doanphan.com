pipeline {

    agent any

    environment {
        DOCKER_IMAGE = "doanphan.com"
    }

    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage("Checkout") {
            steps{
                git branch: 'main', url: 'https://github.com/yanmad27/doanphan.com.git'
            }
        }

    stage("Build docker") {
      steps {
        sh "docker build -t ${DOCKER_IMAGE} . "
      }
    }

    stage("Deploy") {
      steps {
        script {
          try {
            sh "docker rm -f ${DOCKER_IMAGE} &>/dev/null && echo \"Removed old container\""
          }
          catch (exception) {
          }
        }
        sh "docker run -d --name ${DOCKER_IMAGE} -p 1205:3000 --rm ${DOCKER_IMAGE}"
      }
    }
  }
}