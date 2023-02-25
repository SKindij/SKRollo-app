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
> >    "copy-webpack-plugin": "^11.0.0", // to transfer favicons to the SKRapp folder
> >  // This plugin extracts all styles into a separate CSS file that can be attached to a page via a <link> tag.
> >    "mini-css-extract-plugin": "^2.7.0",
> >    "clean-webpack-plugin": "^4.0.0", // dynamically clean SKRapp folder in order to update user cache
> >  }
> > ```

* webpack.config.js
> Since it is not convenient to write commands and specify their arguments in the console, a configuration file is created for WebPack
> > ```javascript
> > const path = require ('path'); // an internal module that allows you to comfortably work with paths on platform;
> >   const HtmlWebpackPlugin = require('html-webpack-plugin');
> >   const {CleanWebpackPlugin} = require('clean-webpack-plugin');
> >   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
> > module.exports = { // this will be our options object
> > 	context: path.resolve(__dirname, 'resources'), // folder where source files of project are located and will be linked to it
> > 	mode: 'development',
> > 	entry: {
> > 		main: './SKRollo.js', // no matter how many modules application contains, there is always a single entry point;
> > 	}, 
> > 	output: {
> > 		path: path.resolve(__dirname, 'SKRapp'), // we want to put everything in SKRapp folder
> > 		filename: '[name].[contenthash].bundle.js' // name configured file using patterns
> > 	}, 	
> > 	resolve: {
> > 		extensions: ['.js', '.json', '.png'], // so that in imports, file extensions are not written, but only their names
> > 		alias: {   // create lightweight paths to folders with files;
> > 			'@models': path.resolve(__dirname, 'resources/models'),
> > 			'@': path.resolve(__dirname, 'resources')
> > 		}	
> >    },	
> > 	optimization: {
> > 	    splitChunks: {
> >           chunks: 'all'		
> > 	    }	
> > 	},
> > 	module: {  // to tell webpack about transformations that need to be done before generating bundle;  
> >         rules: [  // these are our loaders;
> >             {
> >               test: /\.css$/,
> >               use: [MiniCssExtractPlugin.loader, 'css-loader']
> >              },
> > 			 {
> >                test: /\.(png|jpg|jpeg|svg|gif)$/,
> >                type: 'asset/resource',
> >              },
> > 			 {
> >               test: /\.(ttf|woff|eot|woff2)$/,
> >               type: 'asset/resource'
> >              }
> >       ]
> >    },
> > 	plugins: [   // allow to perform tasks after collecting the bundle                        
> >         new HtmlWebpackPlugin({ // to generate an html file based on our base html
> > 			template: './index.html'
> > 		}),
> >         new CleanWebpackPlugin(),
> > 		new MiniCssExtractPlugin()
> >     ] 
> > };
> > ```

___

Using Webpack, we compile the project into the **SKRapp** folder.










