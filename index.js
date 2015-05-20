var React = require('react');
var stickyPosition = require('sticky-position');

module.exports = React.createClass({
	getDefaultProps: function() {
		return {
			className: 'sticky',
			computeWidth: true,
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
		return (
			<div className={this.props.className}>
				<div ref='primary'>{this.props.children}</div>
				<div ref='placeholder'></div>
			</div>
		);
	}
});