import React from 'react';
import TextField from '@material-ui/core/TextField';

import Card from '../components/Card';

const WithoutHooks = () => {
  return (
    <Card>
      <TextField
        label="Numero 1"
      />
    </Card>
  )
}

export default WithoutHooks;
