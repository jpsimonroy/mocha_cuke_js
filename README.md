# React + Mocha + CucumberJS

Template project to get started

  - React for the DOM
  - Mocha for BDD on the application state
  - Cucumber JS for browser testing
  - JSDOM for JQuery support with Mocha
  - Stubby for stubs
  - Foreman for development

### Version
1.0.0

### Installation

You need RVM and ruby 2.2.0 installed. Ask Google how to install RVM.
You need Gulp installed globally:

```sh
$ npm i -g gulp
```

```sh
$ git clone [git-repo-url] <ur_project_name>
$ cd <ur_project_name>
$ bundle
$ npm install
```

### Development
Foreman start would compile and start a local Ruby server with stubs
```sh
$ foreman start
```

Running mocha tests:
```sh
$ sh stub.sh restart && mocha
```
License
----

MIT

**Free Software, Hell Yeah!**
[simon roy]:http://github.com/jpsimonroy
[mocha.js]:http://mochajs.org/
[node.js]:http://nodejs.org
[jQuery]:http://jquery.com
[ReactJS]:http://facebook.github.io/react/
[Gulp]:http://gulpjs.com
[ajira soft]:http://www.ajirasoft.com/
