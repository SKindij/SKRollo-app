# SKRollo-app
Vanila-javascript version

&emsp;**Project structure:**
* resources
  + index.html
  + SKRollo.css
  + SKRollo.js
* package.json
> The main task of webpack is to generate a bundle that can be referenced in index.html.
> > ```javascript
> >  "scripts": {
> >    "dev": "webpack --mode development",
> >    "prod": "webpack --mode production",
> >    "build": "webpack",
> >    "watch": "webpack --watch"
> >  },
> >  "devDependencies": {
> >    "webpack": "^5.75.0", // for webpack operation
> >    "webpack-cli": "^5.0.0" // wrapper for running Webpack from command line
> >    "html-webpack-plugin": "^5.5.0", // creates index.html in dist directory and automatically adds bundle link to it
> >  // These two plugins will be needed so that webpack can validly work with CSS, can load and extract css files:
> >    "style-loader": "^3.3.1", // imports CSS files and applies styles to the DOM
> >    "css-loader": "^6.7.2", // lets you work with @import and url() inside CSS
> >    "copy-webpack-plugin": "^11.0.0", // to transfer favicons to the dist folder
> >  // This plugin extracts all styles into a separate CSS file that can be attached to a page via a <link> tag.
> >    "mini-css-extract-plugin": "^2.7.0",
> >    "clean-webpack-plugin": "^4.0.0", // dynamically clean dist (SKRapp) folder in order to update user cache
> >  }
> > ```



* webpack.config.js
___

Using Webpack, we compile the project into the **SKRapp** folder.










