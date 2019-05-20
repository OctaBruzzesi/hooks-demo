import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import First from './First';
import Second from './Second';
import Third from './Third';

class WithoutHooks extends Component {
  render() {
    const { level } = this.props;
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
}

WithoutHooks.propTypes = {
  level: PropTypes.number.isRequired,
};

export default WithoutHooks;
