import React, { Fragment } from 'react';
import Container from '../components/Container';
import First from './First';
import Second from './Second';
import Third from './Third'

const WithHooks = ({ level }) => {
  return (
    <Fragment>
      <Container>
        <First />
      </Container>
      {
        level > 0 && (
          <Container>
            <Second />
          </Container>
        )
      }
      {
        level > 1 && (
          <Container>
            <Third />
          </Container>
        )
      }
    </Fragment>
  )
}

export default WithHooks;
