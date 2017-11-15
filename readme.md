# Project Title

React Redux Seed Project

### Prerequisites

What things you need to install the software and how to install them
You'll need to have installed:
* [Node.js](https://nodejs.org/en/) - server side JS platform (comes with node package manager)
* [Git](https://git-scm.com/) - Version Control System

Project utilizes packages: 
* [React.JS](https://facebook.github.io/react/) - The web framework used
* [Webpack](https://webpack.js.org/) - Project bundler
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

## Built With

* [React.JS](https://facebook.github.io/react/) - The web framework used
* [npm](https://www.npmjs.com/) - Dependency Management
* [Webpack](https://webpack.js.org/) - Project bundler
