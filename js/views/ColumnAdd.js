/**
 * UCSC Xena Client
 * http://xena.ucsc.edu
 *
 * Column add component, displayed between column cards and after last column card. Used as click handler for inserting
 * or adding new card.
 *
 * State
 * -----
 * actionKey - Index of add column.
 * last - True if add column is after the last visualization column.
 *
 * Actions
 * -------
 * onClick - called on click of component.
 * onHover - called on mouse over and mouse out on component.
 */

'use strict';

// Core dependencies, components
var React = require('react');
var classNames = require('classnames');

// Styles
var compStyles = require('./ColumnAdd.module.css');

var ColumnAdd = React.createClass({
	onClick: function () {
		this.props.onClick();
	},
	onMouseOut() {
		var {last, onHover, actionKey} = this.props;
		if ( !last ) {
			onHover(actionKey, false);
		}
	},
	onMouseOver() {
		var {last, onHover, actionKey} = this.props;
		if ( !last ) {
			onHover(actionKey, true);
		}
	},
	render() {
		var {last} = this.props;
		return (
			<div className={classNames(compStyles.ColumnAdd, {[compStyles.last]: last})}
				onClick={this.onClick}
				onMouseOut={this.onMouseOut}
				onMouseOver={this.onMouseOver}>
				<div className={compStyles.text}>
					Click to {last ? 'Add' : 'Insert'} Column
				</div>
			</div>
		);
	}
});

module.exports = ColumnAdd;
