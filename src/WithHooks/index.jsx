import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import Card from '../components/Card';

const WithHooks = () => {
  const [numberOneValue, setNumberOne] = useState('');

  const handleInput = (e) => {
    setNumberOne(e.target.value);
  }

  return (
    <Card>
      <TextField
        label="Number One"
        value={numberOneValue}
        onChange={handleInput}
      />
    </Card>
  )
}

export default WithHooks;
