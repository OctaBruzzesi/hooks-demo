import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from './Card';

const styles = {};

const CardCustom = (props) => {
  const { level } = props;

  return (
    <Fragment>
      <Card>
        First Level
      </Card>
      {
        level > 0 &&
        <Card>
          Second Level
        </Card>
      }
      {
        level > 1 &&
        <Card>
          Third Level
        </Card>
      }
    </Fragment>
  );
}

CardCustom.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(CardCustom);