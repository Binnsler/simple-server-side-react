var React = require('react');

module.exports = React.createClass({

	_handleClick: function(){
		alert('Beeb boop');
		console.log('boop beeb');
	},

	render: function(){
		return (
			<html>
				<head>
					<title>Server-React-Boilerplate</title>
					<link rel='stylesheet' href='/style.css'/>
				</head>
				<body>
					<h1>Server-React-Boilerplate</h1>
					<p>Is not server side rendering remarkable?</p>
					<button onClick={this._handleClick}>Click Me</button>
					<script dangerouslySetInnerHTML={{__html: 'window.PROPS=' + JSON.stringify(this.props)}} />
					<script src='/bundle.js'/>
				</body>
			</html>
			)
	}
});
