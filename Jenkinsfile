pipeline {
    agent any

    environment {
        CACHE_BUST = System.currentTimeMillis() // unique timestamp for cache-busting
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Chandumarthi/Employee-Performance-Feedback.git'
                bat '''
                    git fetch origin
                    git reset --hard origin/main
                '''
            }
        }

        stage('Build') {
            steps {
                echo 'Building static site...'

                // Update index.html to add cache-busting to CSS and JS
                bat """
                    powershell -Command "(gc index.html) -replace 'style.css', 'style.css?v=${CACHE_BUST}' | Set-Content index.html"
                    powershell -Command "(gc index.html) -replace 'script.js', 'script.js?v=${CACHE_BUST}' | Set-Content index.html"
                """
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                echo 'Deploying to gh-pages branch...'
                bat '''
                    git config --global user.email "chandranagumarthi@gmai.com"
                    git config --global user.name "Chandumarthi"

                    git checkout gh-pages || git checkout -b gh-pages
                    git reset --hard origin/gh-pages || echo "No gh-pages branch yet"

                    git add -f index.html style.css script.js
                    git commit -m "Deploy site"
                    git push -f origin gh-pages
                '''
            }
        }
    }
}
