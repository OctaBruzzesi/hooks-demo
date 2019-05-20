import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from './Card';
import Container from './Container';

const styles = {};

const CardCustom = (props) => {
  const { level } = props;

  return (
    <Fragment>
      <Container>
        <Card>
          First Level
        </Card>
      </Container>
      {
        level > 0 &&
        <Container>
          <Card>
            Second Level
          </Card>
        </Container>
      }
      {
        level > 1 &&
        <Container>
          <Card>
            Third Level
          </Card>
        </Container>
      }
    </Fragment>
  );
}

CardCustom.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(CardCustom);