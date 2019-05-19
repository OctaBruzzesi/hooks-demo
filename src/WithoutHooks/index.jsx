import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import First from './First';
import Second from './Second';
import Third from './Third';

class WithoutHooks extends Component {
  render() {
    const { level } = this.props;
    return (
      <Fragment>
        <First />
        {
          level > 0 &&
            <Second />
        }
        {
          level > 1 &&
            <Third />
        }
      </Fragment>
    )
  }
}

WithoutHooks.propTypes = {
  level: PropTypes.number.isRequired,
};

export default WithoutHooks;
