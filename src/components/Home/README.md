# Mini-Project

The goal of this project is to lay out a very small project that is both fun (touches interesting technologies) and illustrative (touches relevant technologies).  We don't expect this would take more than a few hours, but please take as long as you like, this isn't a speed test!

In the past we've found the approach of a mini-project like this can be the basis of a very rich and rewarding dialogue, far more so than just a few interview conversations.  In a time efficient manner we can explore code, coding stylings and thought processes in a natural way that is much closer to the way people actually work, as opposed to coding interviews.

To be clear, the purpose is not to construct any functionality that would be used directly in the SeeEverything product, rather it is an opportunity to get to know each other around something small and fun.



## Brief: A "Star Wars" People and Planets Viewer.
Make a simple screen that renders a list of people and/or planets from within the Star Wars universe using data from the [swapi](http://swapi.co/api/) REST API.

## Technology Characteristics
Create a node module that:
  - Uses ES6 transpiled with [Babel](https://babeljs.io/) or [Typescript](https://www.typescriptlang.org/).
  - Serves a React page to the browser from [Express](https://expressjs.com/) using [WebPack](https://webpack.github.io/).
  - The client pulls data from it's own server, which in turn makes calls out to the [swapi](http://swapi.co/api/) API.
  - Organize and coordinate the UI state using any strategy you're keen on (eg. [Redux](https://github.com/reactjs/redux) or [Mobx](https://github.com/mobxjs/mobx))
  - Using any kind of styling approach that makes sense (eg. [Sass](http://sass-lang.com/), [Stylus](http://stylus-lang.com/) and/or inline-styles).
  - Using any other NPM modules needed.


**Note:** We've intentionally left GraphQL out of the mix here as this is not intended to be a large project, rather a super small, isolated and fun toy using technologies you're already actively familiar with.

## Design Characteristics
The goal is to get a list of a Star Wars characters, and planets, with some form of toggling between them and possibly filtering.  This is pretty free an open, thinking about clean simple usability ahead of anything too elaborate or time-consuming to produce.

## Communication
Given we're on Github, to chat about the code when you're done please start a PR (pull-request) and we can communicate that way. Additionally our email addresses are:

- **Phil Cockfield** phil@cockfield.net
- **Dave Gardener** dave.gardner@intilecta.com
