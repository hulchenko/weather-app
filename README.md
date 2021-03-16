Weather App Project.

Environment: Node.js

Web Server: Express

---

LIVE DEMO:

https://limitless-tundra-91049.herokuapp.com/

---

Setup:

1. npm init
2. npm i express --save
3. npm i nodemon --save-dev
4. npm i nodemon -g
5. npm i ejs (HTML generator/renderer)
6. add HTML/CSS
7. configure index.js(every time we add new module or process)
8. npm i body-parser (to enable requests parsing and finalize form-request processing)
9. openweathermap setup API key
10. npm install request request-promise --save
11. weather.request.js setup
12. on-screen output
13. heroku deployment:
    1. package.json add engines
    2. scripts fix
    3. update index.js port
    4. npm install -g heroku
    5. heroku login
    6. heroku create
    7. git push heroku main
