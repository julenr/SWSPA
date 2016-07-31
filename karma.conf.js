//
//
//              Created by
//            __ _____ __    _____ _____    _____ _____    __ _____
//         __|  |  |  |  |  |   __|   | |  | __  |     |__|  |     |
//        |  |  |  |  |  |__|   __| | | |  |    -|  |  |  |  |  |  |
//        |_____|_____|_____|_____|_|___|  |__|__|_____|_____|_____|
//
//                on 16/07/2016
//                   isusk246@gmail.com
//
//

module.exports = function karmaConfig (config) {
  config.set({
    basePath: '',
    frameworks: [
      'mocha', 'chai-as-promised', 'chai'
    ],
    reporters: [
      'spec',
      'coverage'
    ],
    client: {
      captureConsole: true
    },
    files: [
      'src/**/*.test.js'
    ],
    preprocessors: {
      'src/**/*.test.js': ['webpack', 'sourcemap']
    },
    webpack: require('./webpack.config'),
    webpackServer: { noInfo: true },
    webpackMiddleware: { noInfo: true},
    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
    colors: true,
    browsers: [
      'PhantomJS'
    ],
    singleRun: true,
    coverageReporter: {
      dir: 'coverage/',
      type: 'html'
    }
  });
};