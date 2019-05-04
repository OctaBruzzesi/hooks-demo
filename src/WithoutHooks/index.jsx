import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import Card from '../components/Card';

class WithoutHooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOneValue: '',
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ numberOneValue: e.target.value });
  }

  render() {
    const { numberOneValue } = this.state.numberOneValue;
    return (
      <Card>
        <TextField
          label="Number One"
          value={numberOneValue}
          onChange={this.handleInput}
        />
      </Card>
    )
  }
}

export default WithoutHooks;
