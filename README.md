# My personal page

Visit site: [hoakusa.com](http://hoakusa.com)

A single page application build by [Angular 1.x](https://angularjs.org/) using [Webpack 2.x](http://webpack.github.io/). The project code was written in ES6 support with [Babel](https://babeljs.io/).

You can find some useful information:
* My working projects
* Porfolio website structure
* UX for personal page
* Motion Design

> Warning: I am happy to share the code for everyone exclude image mateials.
> Forked by [angular-webpack](https://github.com/preboot/angularjs-webpack) follow [MIT license](/LICENSE).

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

Download folder then run
```bash
npm install
```
to install all dependencies

> Check package version in `package.json` inside [`/package.json`](/package.json)

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`. Change port number at `webpack.config.js` inside [`/webpack.config.js`](/webpack.config.js).

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)
