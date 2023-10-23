This is a personal project for showing our family tree

Database is Postgres local: libraries: pg pg-hstore sequelize  
Authentication is Passport: libraries: passport passport-local

Main files are:
app.js
passport-config.js

    routes/         auth.js
    routes/         tree.js
    controllers/    auth.js
    controllers/    tree.js
    db/             db-init.js
    db/             db-functions.js
    db/             models.js

Views are:

    index.ejs
    login.ejs
    register.ejs

    tree/           index.ejs
    tree/           table.ejs
