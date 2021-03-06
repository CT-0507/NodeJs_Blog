const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const sass = require('node-sass');
const app = express();
const path = require('path');
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');
// Connect to db

db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
//app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname));
//app.use(morgan('combined'))
//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
