"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
	getInitialState: function() {
		return {
			author: { id: '', firstName: '', lastName: '' },
			errors: {},
			dirty: false
		};
	},

	render: function() {
		return (
			<AuthorForm author={this.state.author} errors={this.state.errors}/>
		);
	}
});

module.exports = ManageAuthorPage;