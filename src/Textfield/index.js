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
  static propTypes = {
    hint: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    modifier: PropTypes.oneOf(['default', 'error', 'loading']),
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onHover: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
  }

  static defaultProps = {
    hint: '',
    label: '',
    className: '',
    modifier: 'default',
    onChange: () => {},
    onFocus: () => {},
    onHover: () => {},
    onKeyDown: () => {},
    onKeyUp: () => {},
  }

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  /**
   * getSafeProps method
   * Will return the safe props for button element
   * @returns {Object} - The props
   */
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
  
  /**
   * getSafeProps method
   * Set the state for UI proposals
   */
  onChange = (event) => {
    const {
      value,
    } = event.target;

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
      className,
    } = this.props;

    const classNames = classnames(
      nameSpace,
      className,
      `${nameSpace}--${modifier}`,
      {
        [`${nameSpace}--active`]: Boolean(this.state.value.length),
        [`${nameSpace}--active`]: Boolean(this.state.value.length),
      },
    );

    const inputSafeProps = this.getSafeProps();

    return (
      <div
        className={classNames}
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
