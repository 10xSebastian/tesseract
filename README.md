# CSSoP (CSS on principles)

It’s a challenge in any web development project to structure and organize all the css code.

Existing css frameworks often try to introduce new principles. You always have to learn the new concepts behind, what is not simplifying the use of them.

This css framework is build upon existing software principles to help keeping things simple and manageable.

## Quick start guide

## Principles

## CSS Normalization / CSS Reset
CSSoP uses [normalize.css](https://necolas.github.io/normalize.css/) to make browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

## Development

Requires to have node.js, ruby and bundler installed.

###  Intitial checkout

```
git clone git@github.com:pape-io/cssop.git

cd cssop

bundle install

npm install

grunt
```

### Build processes

#### Serve

```
grunt
```
or alternatively `grunt serve`

Builds the framework in `/.tmp`, spawns a webserver, opens the reference page and provides livereload.

#### Dist

```
grunt dist
```

Builds the framework and a compressed version in `/dist` and opens the reference page.
