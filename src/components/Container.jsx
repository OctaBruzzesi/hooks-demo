import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    height: 400,
  },
};

const Container = (props) => {
  const { classes, children } = props;

  return (
    <div className={classes.container}>
      {children}
    </div>
  );
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Container);