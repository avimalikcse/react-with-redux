## Minimal React and Webpack 4 boilerplate with babel 


> Basic React App with webpack(Boilerplate) using latest version of react and babel as well as jest and enzyme for more details about technologies used. [click](#technologies-used)

> Basic Example of react 





[Installation](#installation)

[Configuration](#configuration)

[Technologies used](#technologies-used)

### Installation

1- Clone the App

`git clone https://github.com/avimalikcse/react-boilerplate-app.git`

2- `yarn` or `npm install` to install npm packages

3- run `yarn start` or `npm start` ti start the dev server.

3- build and bundling your resources for production `yarn build`.

4- Unit testing will watch all your changes in the test files as well as create coverage folder for you. 
`yarn test`


### Configuration
* Webpack Config paths based on your file structure you can go to `webpack/paths.js` and modify the source and file names based on your need.
* `webpack/webpack.common.js` config common webpack for both dev and production environments.
* webpack/webpack.dev.js config webpack for dev environment.
* `webpack/webpack.prod.js` config webpack for production environment.
* `/webpack.config.js` main webpack config that merge common and webpack environment based config.
* Enzyme config `/setupTest.js` here you will have all setup for enzyme to test your component.
* Prettier config `/.prettierc`.
* Browsers list config `/.browserslistrc`.


#### Technologies used


* [Webpack 4](https://github.com/webpack/webpack) 
* [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [React](https://github.com/facebook/react) `16.8`
* [Lodash](https://github.com/lodash/lodash)
* [Jest](https://github.com/facebook/jest) [ Unit test]
* [Enzyme](http://airbnb.io/enzyme/) for UI testing.
* [Eslint](https://github.com/eslint/eslint/) with airbnb config
* [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
* [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
* [CSS modules](https://github.com/css-modules/css-modules) [ Isolated style based on each component ]
* [Browsers list](https://github.com/browserslist/browserslist) [ Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env ]
* [React hot loader](https://github.com/gaearon/react-hot-loader)
* [Webpack dev serve](https://github.com/webpack/webpack-dev-server) 
