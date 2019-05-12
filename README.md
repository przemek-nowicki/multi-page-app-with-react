# Multi Page App With React

A lightweight, flexible webpack setup with React for multi page application development. <br />
It uses preconfiguration based on the corresponding file names to generate static pages.<br />

A write up of this setup can be found on this [Medium post](https://itnext.io/building-multi-page-application-with-react-f5a338489694).

Here's a code sample to illustrate this concept for an example static page with few React componenets:
![picture alt](http://assets.miwu.pl/mpa-with-react-example.png "MPA with React example")

## Quick Start

install dependencies
```
$ npm install
```

## Development & Build

**dev**

```
$ npm start
```
***start** script runs server in development mode with hot module replacement and open the browser after server had been started.*

**build**

```
$ npm run build
```

***build** script runs in production mode to improve load time (i.e. minified bundles, lighter weight source maps etc)*