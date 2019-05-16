import React, { Component, Fragment } from 'react';
import First from './First';

class WithoutHooks extends Component {
  render() {
    return (
      <Fragment>
        <First />
      </Fragment>
    )
  }
}

export default WithoutHooks;
