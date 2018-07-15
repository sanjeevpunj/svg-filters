import React, {Component} from 'react';
import './InputText.css';
import PropTypes from 'prop-types';

class InputText extends Component {
  onChange = (event) => {
    let value = event.target.value;
    const {secondValue, firstValue} = this.props;

    if (secondValue) {
      value = `${value} ${secondValue}`;
    } else if (firstValue) {
      value = `${firstValue} ${value}`;
    }
    this.props.onChange(value);
  }

  render() {
    let {value, type, step, min, max} = this.props;

    return React.createElement('input', {
      value: value,
      type: type,
      step: step,
      min: min,
      max: max,
      onChange: this.onChange,
      className: 'InputText'
    });
  }
}

export default InputText;

InputText.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.string,
  onChange: PropTypes.func
};