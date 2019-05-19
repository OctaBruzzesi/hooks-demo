import React, { Fragment } from 'react';
import First from './First';
import Second from './Second';

const WithHooks = ({ level }) => {

  return (
    <Fragment>
      <First />
      {
        level > 0 &&
          <Second />
      }
    </Fragment>
  )
}

export default WithHooks;
