import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import UserList from './components/UserList'; 

const App = () => (
  <Provider store={store}>
    <UserList />
  </Provider>
);

export default App;
