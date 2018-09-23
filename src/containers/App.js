import React from 'react';
// import { hot } from 'react-hot-loader'

import Counter from '../components/Counter'

export default class App extends React.Component {
  render() {
    return (
      <h1>
        hello world<br />
        <Counter />
      </h1>
    );
  }
}

// export default hot(module)(App);
