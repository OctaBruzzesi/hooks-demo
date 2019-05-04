import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import logo from './logo.svg';
import WithHooks from './WithHooks';
import WithoutHooks from './WithoutHooks';
import './App.css';

const styles = {
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};

function App(props) {
  const { classes } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Grid>
        <Grid
          container
          className={classes.gridContainer}
        >
          <Grid item md={4}>
            <WithoutHooks />
          </Grid>
          <Grid item md={4}>
            <WithHooks />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
