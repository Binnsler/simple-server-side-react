'use strict';
require('babel-register')({
	presets: ['react']
});

// import express from 'express';
var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('./src/containers/App.jsx');

app.use(express.static('public'));

app.get('/', function(request, response){
	var bob = 'Bob'
	var test = `hello_${bob}`;
	console.log(test)

	var html = ReactDOMServer.renderToString(
		React.createElement(App)
	);
	response.send(html);
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log('Listening on port: ', PORT);
});
