/**
 *  Module dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Helpers
 */
const safeProps = [
  'disabled',
  'name',
  'type',
  'onClick',
  'className',
];
const nameSpace = 'ui-button';

/**
 *  Ui Button
 */
class Button extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    onClick: PropTypes.func,
    className: PropTypes.string,
    modifier: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }

  static defaultProps = {
    disabled: false,
    name: '',
    type: 'button',
    onClick: () => {},
    className: '',
    modifier: 'primary',
    size: 'medium',
  }

  /**
   * getSafeProps method
   * Will return the safe props for button element
   * @returns {Object} - The props
   */
  getSafeProps = () => {
    const props = {};
    Object.keys(this.props).map((key) => {
      if (safeProps.includes(key)) {
        props[key] = this.props[key];
      }

      return key;
    });

    return props;
  }

  render() {
    const {
      children,
      modifier,
      disabled,
    } = this.props;

    const props = this.getSafeProps();

    const className = classnames(
      nameSpace,
      `${nameSpace}--${modifier}`,
      {
        [`${nameSpace}--disabled`]: disabled,
      },
    );

    return (
      <button
        {...props}
        className={className}
      >
        {children}
      </button>
    );
  }
}

/**
 *  Expose Component
 */
export default Button;
