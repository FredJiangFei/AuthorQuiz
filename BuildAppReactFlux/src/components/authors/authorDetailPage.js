"use strict";

var React = require('react');

var AuthorDetailPage = React.createClass({
	render: function() {
		return (
			<h1>{this.props.params.authorId}</h1>
		);
	}
});

module.exports = AuthorDetailPage;