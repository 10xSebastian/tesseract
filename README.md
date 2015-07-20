[![alt tag](tesseract.png)](https://pape-io.github.io/tesseract/)
[Reference page](https://pape-io.github.io/tesseract/)

It’s a challenge in any web development project to structure and organize all the css code.

Existing css frameworks often try to introduce new principles. You always have to learn the new concepts behind, what is not simplifying the use of them.

This css framework is build upon existing software principles and terminology to help keeping things simple and manageable.

## Quick start guide

## Principles

In software development, principles are needed to make complex things managable.

### Single responsibility

A class should have responsibility over only a single part of your system.

**Responsible for one thing:**
```css
.padding-all-medium {
  padding: 15px;
}

.margin-bottom-large {
  margin-bottom: 20px;
}

.border-all {
  border: 1px solid transparent;
}

.border-radius-small {
  border-radius: 4px;
}
```

**Responsible for multiple things:**
```css
<span style="color: green"> TEST </span>
.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
```

## Modules
With modules, concerns are separated. It's a self-contained unit that in a bigger context can be reused to execute the same action/functionality over and over again.
Flexibility and reuseablity are the benefits of modules. 

## Components
A component, by definition, is a unit of composition. It the context of this css-framwork, a component is made up of multiple modules.

## CSS Reset vs. CSS Normalization
Tesseract uses [css-reset](https://github.com/shannonmoeller/reset-css) to remove all default browser css values for elements.
This follows the principle of seperation of concerns (see [principles](https://github.com/pape-io/tesseract#principles)).

## Development

Requires to have node.js, ruby and bundler installed.

### Intitial checkout

```
git clone git@github.com:pape-io/tesseract.git

cd tesseract

bundle install

npm install

bower install

grunt
```

### Regression testing

This project uses [PhanomCSS](https://github.com/Huddle/PhantomCSS) and [grunt-phantomcss](https://github.com/chrisgladd/grunt-phantomcss).
For every distribution it creates a screenshot from the reference page (overview) and screenshots from every module and component.
Those screenshots are used to compare visual changes.

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

Builds the framework and a compressed version in `/dist` and opens the reference page. Afterwards it creates screenshots from the reference page (overview) and screenshots for each module/component. Those screenshots are used to compare/identify visiual changes (see (Regression Testing)[#regression-testing]).

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

[![BrowserStack](/BrowserStack.png)](https://www.browserstack.com/)
This project uses BrowserStack to test on various browsers in an easy and automated way.
Thanks to BrowserStack for supporting this project.