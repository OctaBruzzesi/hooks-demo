import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';

import Card from '../components/Card';

const First = () => {
  const [numberOneValue, setNumberOne] = useState('');

  const handleInput = (e) => {
    setNumberOne(e.target.value);
  }

  return (
    <Fragment>
      <Card>
        <TextField
          label="Number One"
          value={numberOneValue}
          onChange={handleInput}
        />
      </Card>
    </Fragment>
  )
}

export default First;
