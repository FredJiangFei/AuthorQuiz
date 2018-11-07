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

	setAuthorState: function(e) {
		var field = e.target.name;
		var value = e.target.value;
		this.state.author[field] = value;
		return this.state.setState({ author: this.state.author });
	},

	render: function() {
		return (
			<AuthorForm author={this.state.author} errors={this.state.errors}/>
		);
	}
});

module.exports = ManageAuthorPage;