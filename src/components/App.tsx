
import React from 'react';
import { Provider } from 'react-redux'
import store from '../store/configureStore';
import ExampleComponent from './ExampleComponent';

import Login from './Login';

function App() {
  return (
    <Provider store={store}>
      <Login/>
      <ExampleComponent/>
    <h1>hello</h1>
    </Provider>
  );
}

export default App;
