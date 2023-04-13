import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Icon extends PureComponent {
  static defaultProps = {
    type: '',
    className: '',
  };

  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const { type, className, ...others } = this.props;

    const cls = classnames({
      iybfont: true,
      [`icon-${type}`]: !!type,
      [className]: !!className,
    });

    return (
      <i className={cls} {...others} />
    );
  }
}

export default Icon;
