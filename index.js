var React = require('react');
var stickyPosition = require('sticky-position');

module.exports = React.createClass({
	getDefaultProps: function() {
		return {
			className: 'sticky',
			computeWidth: true,
			tag: "div",
		};
	},
	componentDidMount: function() {
		this.sticky = stickyPosition({
			primary: React.findDOMNode(this.refs.primary),
			placeholder: React.findDOMNode(this.refs.placeholder),
			wrapper: React.findDOMNode(this),
			computeWidth: this.props.computeWidth,
		})
	},
	componentWillUnmount: function() {
		this.sticky.destroy();
	},
	render: function() {
		return React.createElement(this.props.tag, {className: this.props.className}, [
				React.createElement(this.props.tag, {ref: 'primary', key: 0}, this.props.children),
				React.createElement(this.props.tag, {ref: 'placeholder', key: 1})
		]);
	}
});