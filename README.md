# Star Wars Universe Project

The goal of this project is to lay out a small project that is both fun (touches interesting technologies) and illustrative (touches relevant technologies).

## Brief: A "Star Wars Universe"
This SPA renders a list of people, films, species, starships, vehicles and planets from within the Star Wars universe using data from the [swapi](http://swapi.co/api/) REST API.

## Technology Characteristics
Create a node module that:
  - Uses ES6 transpiled with [Babel](https://babeljs.io/).
  - Serves a React page to the browser from [Express](https://expressjs.com/) using [WebPack](https://webpack.github.io/).
  - The client pulls data from it's own server, which in turn makes calls out to the [swapi](http://swapi.co/api/) API.
  - Organize and coordinate the UI state using a Flux strategy (eg. [Redux](https://github.com/reactjs/redux))
  - SASS-BEM styling approach to keep styles modular.
  - For unit testing the technologies are Karma, mocha, chai and Enzyme to test React components.

## Quick start
  1. Run `npm install` to install dependencies.<br />
  2. Run `npm server` to run the express server at port 3000.
  3. Run `npm run build` to start Webpack and bundle the App.
  4. Run `npm test` to run the unit test process.
  5. Run `npm run tdd` to keep karma running.

  Now you're ready to rumble!

**Note:** I have left GraphQL out of the mix here (future feature) as this is not intended to be a large project, rather a small, isolated and fun toy using technologies I'm already actively familiar with.

## Design Characteristics
The goal is to get a list of a Star Wars characters, films, species, starships, vehicles and planets, with some form of toggling between them and possibly filtering.  This is pretty much, thinking about clean simple usability ahead of anything too elaborate or time-consuming to produce.

- **Julen Rojo** rojo.julen@gmail.com
