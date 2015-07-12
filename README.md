# Tesseract (CSS-Framework on principles)

It’s a challenge in any web development project to structure and organize all the css code.

Existing css frameworks often try to introduce new principles. You always have to learn the new concepts behind, what is not simplifying the use of them.

This css framework is build upon existing software principles and terminology to help keeping things simple and manageable.

## Quick start guide

## Principles

## Modules & Components
With modules, concerns are separated. It's a self-contained unit that in a bigger context can be reused to execute the same action/functionality over and over again.
Flexibility and reuseablity are the benefits of modules. 

A component, by definition, is a unit of composition. It the context of this css-framwork, a component is made up of multiple modules.

## CSS Normalization / CSS Reset
Tesseract uses [normalize.css](https://necolas.github.io/normalize.css/) to make browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

## Development

Requires to have node.js, ruby and bundler installed.

### Intitial checkout

```
git clone git@github.com:pape-io/tesseract.git

cd tesseract

bundle install

npm install

grunt
```

### Regression testing

This project uses [PhanomCSS](https://github.com/Huddle/PhantomCSS) and [grunt-phantomcss](https://github.com/chrisgladd/grunt-phantomcss).
For every distribution it creates a screenshot from the reference page (overview) and screenshots from every module and component.
The screenshots are used to compare visual changes.

### CSS Performance

Because the amount of css rules has a big impact on the browsers rendering performance, Tesseract uses [uncss](https://github.com/giakki/uncss) for detecting unused and [csscss](https://github.com/zmoazeni/csscss) for detecting redundant css rules.


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

### Custom Icons

Tesseract uses a custom icon font for the reference page generated with [FontCustom](https://github.com/FontCustom/fontcustom/).
To generate this icon font inside of this project use:

```
fontcustom compile icons/vectors --templates scss --no-hash
```

## Credits

### Author

[Sebastian Pape](https://github.com/pape-io) is web-developer at heart and software craftsman focusing on full-stack application development.
This project was started as part of his thesis in computer science.

### BrowserStack

![BrowserStack](/BrowserStack.png)
This project uses BrowserStack to test the software on multiple browsers in an easy and automated way.
Thanks to BrowserStack for supporting this project.
