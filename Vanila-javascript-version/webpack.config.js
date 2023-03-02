const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	context: path.resolve(__dirname, 'resources'),
	mode: 'development',
	
	entry: {
		main: './SKRollo.js',
	}, 
	output: {
		path: path.resolve(__dirname, 'SKRapp'),
		filename: '[name].[contenthash].bundle.js'
	},
	
	resolve: {
		extensions: ['.js', '.json', '.png'],
		alias: {
			'@models': path.resolve(__dirname, 'resources/models'),
			'@': path.resolve(__dirname, 'resources')
		}	
    },
	
	optimization: {
	    splitChunks: {
          chunks: 'all'		
	    }	
	},

	module: {    
        rules: [      
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader']
             },
			 {
               test: /\.(png|jpg|jpeg|svg|gif)$/,
               type: 'asset/resource',
             },
			 {
              test: /\.(ttf|woff|eot|woff2)$/,
              type: 'asset/resource'
             }
      ]
   },

	plugins: [                           
        new HtmlWebpackPlugin({
			template: './index.html'
		}),
        new CleanWebpackPlugin(),
		new MiniCssExtractPlugin()
    ]

};
