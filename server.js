const express = require('express');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});
const session = require('express-session');
const passport = require('passport'),


// livereload
livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const liveReloadServer = livereload.createServer();

liveReloadServer.watch(path.join(__dirname, 'public'));

liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

const app = express();
app.use(connectLivereload());
app.use(passport.initialize());
const PORT = process.env.PORT || 3001;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');

// Express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('views/images'));
app.use(express.static(path.join(__dirname, '/public')));

// Express Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express Session
const sess = {
  secret:
    'hnnnngh, I’m trying to conduct global maritime trade, but I’m dummy thicc, and the clap of my hull plates keeps blocking the Suez Canal',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
