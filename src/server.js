import path from 'path';
import express from 'express';
import request from 'request';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const host = process.env.HOST;
const app = express();

app.use('/api/:items', function (req, res, next) {
  res.send(SWAPIWorld[req.params.items]);
  res.end();
});

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    hot: true,
    noInfo: true,
    publicPath: config.output.publicPath,
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use('*', function (req, res, next) {
    var filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result){
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  app.use(express.static(__dirname + 'statics'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}

// Run Express server
app.listen(port, host, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});


// Extract SW Universe from SWAPI API
const SWAPI_URL_ROOT = 'http://swapi.co/api';
const SWAPI_URL_PEOPLE = 'people';
const SWAPI_URL_FILMS = 'films';
const SWAPI_URL_STARSHIPS = 'starships';
const SWAPI_URL_VEHICLES = 'vehicles';
const SWAPI_URL_SPECIES = 'species';
const SWAPI_URL_PLANETS = 'planets';
const SWAPIWorld = {
  people: {
    type: SWAPI_URL_PEOPLE,
    collection: [],
    filled: false
  },
  films: {
    type: SWAPI_URL_FILMS,
    collection: [],
    filled: false
  },
  starships: {
    type: SWAPI_URL_STARSHIPS,
    collection: [],
    filled: false
  },
  vehicles: {
    type: SWAPI_URL_VEHICLES,
    collection: [],
    filled: false
  },
  species: {
    type: SWAPI_URL_SPECIES,
    collection: [],
    filled: false
  },
  planets: {
    type: SWAPI_URL_PLANETS,
    collection: [],
    filled: false
  }
};

getSWAPIItems(SWAPIWorld.people);
getSWAPIItems(SWAPIWorld.films);
getSWAPIItems(SWAPIWorld.starships);
getSWAPIItems(SWAPIWorld.vehicles);
getSWAPIItems(SWAPIWorld.species);
getSWAPIItems(SWAPIWorld.planets);

function getSWAPIItems(items, page = 1) {
  request
    .get(`${SWAPI_URL_ROOT}/${items.type}/?page=${page}`, (error, response, body) => {
      const data = JSON.parse(body);
      items.collection = [...items.collection, ...data.results];
      if (data.next) {
        getSWAPIItems(items, page + 1);
      } else {
        items.filled = true;
        console.log(`${items.collection.length} ${items.type} Retrieved`);
      }
    })
    .on('error', (error) => {
      console.error('Error retrieving data from SWAPI: ', error);
    });
}
