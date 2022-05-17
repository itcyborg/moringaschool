# moringaschool
Moringaschool demo app

## How to install locally
1. Clone/download the repo
2. Ensure you have node and npm installed in your system. Supported node version is 14.4.0 and above
3. run `npm install`
4. install sequelize cli globally by running `npm install -g sequelize-cli`
5. Install mysql/ mariadb, instructions on this an be found in their respective official websites [mariadb: https://mariadb.org/documentation/], [mysql: https://dev.mysql.com/doc/]
6. cd into the project directory, edit config.json file in `YOUR_PROJECT_DIR/config` direcory and set the respective database configuration for your instance
7. in your terminal at your project's base directory run `sequelize db:migrate` to populate your database with the projets tables
8. run `npm run start` and follow install the user interface at [https://github.com/itcyborg/moringaui], or access the API's below via base url: http://localhost:3000 for local deployment or online using https://moringasrv.laragrade.com


# API documentation

## Projects

List projects


`
curl --request GET \
  --url http://localhost:3000/project
`

Show project


`
curl --request GET \
  --url http://127.0.0.1:3000/project/:project_id
`

Create project

`
curl --request POST \
  --url http://127.0.0.1:3000/project \
  --header 'Content-Type: application/json' \
  --data '{
	"name":"Test project",
	"description":"a simple moringa test project"
}'
`

Update project

`
curl --request PUT \
  --url http://127.0.0.1:3000/project/1 \
  --header 'Content-Type: application/json' \
  --data '{
	"name":"Test project 123 46512121121",
	"description":"a simple moringa toject"
}'
`

Delete project

`
curl --request DELETE \
  --url http://127.0.0.1:3000/project/1
`

## Issues

List issues

`
curl --request GET \
  --url http://127.0.0.1:3000/issue
`

Create issue

`
curl --request POST \
  --url http://127.0.0.1:3000/issue \
  --header 'Content-Type: application/json' \
  --data '{
	"subject":"Test subject issue",
	"description":"Cannot log in to my wallet account",
	"severity":3,
	"project_id": 7
}'
`

Update issue

`
curl --request PUT \
  --url http://127.0.0.1:3000/issue/1 \
  --header 'Content-Type: application/json' \
  --data '{
	"subject":"Test subject issue",
	"description":"Cannot log in to my wallet account",
	"severity":3
}'
`

Show Issue

`
curl --request GET \
  --url http://127.0.0.1:3000/issue/1
`

Delete Issue

`
curl --request DELETE \
  --url http://127.0.0.1:3000/issue/1
`

## Logs

List all Logs

`
curl --request GET \
  --url http://127.0.0.1:3000/log
`

Create Log

`
curl --request POST \
  --url http://127.0.0.1:3000/log \
  --header 'Content-Type: application/json' \
  --data '{
	"level":"1",
	"content":"test",
	"origin":"127.0.0.1",
	"subject":"Unhandled exception"
}'
`

Show Log

`
curl --request GET \
  --url http://127.0.0.1:3000/log/1
`

Update Log

`
curl --request PUT \
  --url http://127.0.0.1:3000/log/2 \
  --header 'Content-Type: application/json' \
  --data '{
	"level":"1",
	"content":"test",
	"origin":"127.0.0.1",
	"subject":"Unhandled exception",
	"status":"5"
}'
`

Delete Log

`
curl --request DELETE \
  --url http://127.0.0.1:3000/log/1
`



