/**
 *  Module dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 *  Helpers
 */
const nameSpace = 'ui-textfield';
const inputUnsafeProps = [
  'label',
  'className',
  'hint',
  'children',
];

/**
 *  Textfield component
 */
class Textfield extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  getSafeProps = () => {
    const props = {};

    Object.keys(this.props).map((key) => {
      if (!inputUnsafeProps.includes(key)) {
        props[key] = this.props[key];
      }

      return;
    });

    return props;
  }

  onChange = (e) => {
    const {
      value,
    } = e.target;

    const {
      onChange,
    } = this.props;

    this.setState({
      value,
    }, () => onChange);
  }

  render() {
    const {
      label,
      hint,
      modifier,
    } = this.props;

    const className = classnames(
      nameSpace,
      {
        [`${nameSpace}--active`]: Boolean(this.state.value),
      },
    );

    const inputSafeProps = this.getSafeProps();

    return (
      <div
        className={className}
      >
        <label className={`${nameSpace}__label`}>{label}</label>
        <input
          className={`${nameSpace}__input`}
          {...inputSafeProps}
          onChange={event => this.onChange(event)}
        />
        <span className={`${nameSpace}__hint`}>{hint}</span>
      </div>
    )
  }
}

/**
 *  Expose component
 */
export default Textfield;
