const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan('dev'));

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources/views'));
console.log('Path: ', path.join(__dirname, 'resources/views'));

// Routes
route(app);

// 127.0.0.1 -> localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
