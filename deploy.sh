docker build -t daydream_capstone-image .

docker tag daydream_capstone-image registry.heroku.com/daydream_capstone/web


docker push registry.heroku.com/daydream_capstone/web

heroku container:release web -a daydream_capstone