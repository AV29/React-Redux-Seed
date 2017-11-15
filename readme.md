# React Redux Seed Project

### Prerequisites

What things you need to install the software and how to install them
You'll need to have installed:
* [Node.js](https://nodejs.org/en/) - server side JS platform (comes with node package manager)
* [npm](https://www.npmjs.com/) - Dependency Management (usually comes with Node.js)
* [Git](https://git-scm.com/) - Version Control System

## Built with: 
* [React](https://facebook.github.io/react/) (v.16) - The web framework used
* [Redux](https://redux.js.org/) (v.3) - App state management lib
* [React Router](https://reacttraining.com/react-router/) (v.4) - UI routing lib
* [Reselect](https://github.com/reactjs/reselect) (v.3) - Simple “selector” library for Redux
* [React Redux I18n](https://www.npmjs.com/package/react-redux-i18n) (v.1) - I18n lib
* [Immutable](https://facebook.github.io/immutable-js/) (v.3) - Immutable data structures management 
* [Moment](https://momentjs.com/) (v.2) - Date Time management lib
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Less](http://lesscss.org/) (v.2) - Style preprocessor
* [Jest](https://facebook.github.io/jest/) (v.21) - Testing Framework
* [Express](http://expressjs.com/) (v.4) - Node Js Web Framework
* [Webpack](https://webpack.js.org/) (v.3) - Project bundler
* [Babel](https://babeljs.io/) (v.6) - Transpiling lib
* [PostCss](http://postcss.org/) (v.6) - Css transforming tool
* [Eslint](https://eslint.org/) (v.4) - Code quality tool
* [JsDoc](http://usejsdoc.org/) - Documentation generator


## Cloning

```
git clone https://github.com/AV29/React-Redux-Seed.git
```

### Installing

```
npm install
```

### Starting in DEV mode

```
npm start
```
...and you'll see browser tab opened in default browser with application running on 3000 port. Unit tests and lint errors watcher will run automatically

Application run on Node.js simple express server.

## Running tests

You still can run unit tests manually by launching:

```
npm test
```
... for single run, and:
```
npm run test:watch
```
...for run in watch mode

## Generating Docs

To generate docs you need to run following command: 
```
npm run docs
```
That command will eventually run a simple static server which is serving content with docs generated using * [JsDoc](http://usejsdoc.org/) tool.

## Building PROD version
To build production version from the scratch you may run a single command:
```
npm run ultimate
```
If you already have ran "npm install" command before then you'll just need to run: 
```
npm run build
```
That command will eventually build script, styles and html with minified code and run it on static server on 3020 port.
