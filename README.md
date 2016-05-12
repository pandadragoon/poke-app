#### INFO
*react starter for use in simple react projects*
# Get Started
1. npm install
2. npm run dev -> developer environment. Files in build folder.
3. npm run deploy -> production environment. Files in dist folder.
4. webserver -> localhost:8080

## Features
* ESLint with support for ES6 and JSX
* Babel to compile ES6 and JSX
* Webpack for build processes
* React 0.14 and React Router 1.0
* Alt for Flux implementation
* Flow (optional) for static type checking

## User Guide
### Project Structure
* src/Main.jsx -> Router configs
* src/components/App.jsx -> shared site layout (i.e. header and footer) wrapper and container for route views
* src/components/Home.jsx -> Home page component

### Include images in components
  `var pic = require('./pic.jpg');`

  `<img src={pic} />`
### Include styles in components
  `require('./style.scss');`

### Include javascript in components
  `require('script!./script.js')`

### Utilize Flow
Put at top of file

  `/* @flow */`

Run flow in the command line or utilize the Nuclide IDE (based on atom) to have it auto-check as you code.

### Routes
To get routes that work correctly in production follow the part about *Configuring You Server* on the react-router [website](https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md) for the production server.  It works in dev because of settings for the dev server.

### Testing
* npm run test -> run tests
* npm run test:watch -> watch tests for changes and rerun

Put tests for components in the test folder with files named `{ComponentName}-test.js` Reference the article [How we unit test React components using expect-jsx](https://blog.algolia.com/how-we-unit-test-react-components-using-expect-jsx/) for how to create tests, as well as the documentation listed in the references below.

### Style Guide
* Components should have their own folder named using Pascal Case
* Component filenames should be named with Pascal Case
* 2 space, spaces for indents
* Strings use single-quotes
* Either ES6 or ES5 for components acceptable but in general only use ES5 if the component needs to use mix-ins
* Utilize BEM and SMACSS for now with styling.
* Put component specific images with components (makes file paths easier).
* Component specific styles should be under a component named folder with a filename of `_styles.scss` then included in the index file of components
* All data calls should be from a file in sources that is imported into stores.
* Helpers folder should be used to hold repeatable code that can then be imported so that the codebase can remain as DRY as possible.
* Look for an npm install of a library first.  If one doesn't exist then put library code in libs folder.
* Add `/* @flow */` to the top of js and jsx files even if you aren't going to utilize flow so that others can run flow on code

### Resources
* [React/Alt/Webpack Tutorial](http://SurviveJS.com)
* [React Docs](https://facebook.github.io/react/docs/getting-started.html)
* [Alt Docs](http://alt.js.org/docs/)
* [Webpack Docs](http://alt.js.org/docs/)
* [Expect.js Docs](https://github.com/Automattic/expect.js)
* [Expect.jsx Docs](https://github.com/algolia/expect-jsx)
* [Mocha Docs](https://mochajs.org/)
* [Flow Docs](http://flowtype.org/docs/getting-started.html#_)
* [Nuclide IDE](https://github.com/facebook/nuclide) (recommended for working with flow)
* [Test Utilities](https://facebook.github.io/react/docs/test-utils.html)
* [How we unit test React components using expect-jsx](https://blog.algolia.com/how-we-unit-test-react-components-using-expect-jsx/)
