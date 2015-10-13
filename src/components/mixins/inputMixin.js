'use strict'

var React = require('react');
var Input = require('react-input-mask');

module.exports = {
  getSingleElement: function(value, index) {
    index = index || 0;
    return(
      <Input
        type={this.props.component.inputType}
        className="form-control"
        id={this.props.component.key}
        data-index={index}
        name={this.props.name}
        value={value}
        disabled={this.props.readOnly}
        placeholder={this.props.component.placeholder}
        mask={this.props.component.inputMask}
        onChange={this.onChange}
        >
      </Input>
    );
  }
};