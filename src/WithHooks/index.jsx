import React, { Fragment } from 'react';
import First from './First';
import Second from './Second';
import Third from './Third'

const WithHooks = ({ level }) => {
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

export default WithHooks;
