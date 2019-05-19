import React, { Component } from 'react';

import Card from '../components/Card';

class Third extends Component {
  state = {
    note: '',
  }

  componentDidMount() {
    this.setState({ note: 'Loading...' });
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => this.setState({ note: json.title }))
    .catch(e => console.log(e));
  }

  render() {
    const { note } = this.state;
    return (
      <Card>
        {note}
      </Card>
    )
  }
}

export default Third;
