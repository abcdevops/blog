up:
	docker-compose up -d
ssh:
	docker-compose exec  giwww /bin/sh
down:
	docker-compose stop
bundle-install:
	docker-compose exec  giwww bundle install --path vendor/bundle
npm-install:
	docker run -it --rm --name node -v `pwd`:/usr/src/app -w /usr/src/app node:carbon-alpine npm install
npm-build:
	docker run -it --rm --name node -v `pwd`:/usr/src/app -w /usr/src/app node:carbon-alpine /bin/sh -c "cd semantic && ../node_modules/.bin/gulp build"
exec-rake:
	docker-compose exec  giwww bundle exec rake
deploy:
	docker-compose exec  giwww bundle exec rake	deploy
rm:
	docker-compose stop; docker-compose rm -f
list:
	docker-compose ps
reload:
	docker-compose stop && 	docker-compose up -d
logs:
	docker-compose logs
