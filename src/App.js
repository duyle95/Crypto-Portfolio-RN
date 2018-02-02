import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import reduxThunk from 'redux-thunk';
import { Header } from 'react-native-elements';

import Router from './Router';
import CoinList from './components/CoinList';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
{/* <View style={{ flex: 1 }}>
  <Header
    centerComponent={{ text: 'Crypto Market', style: { color: '#fff', fontSize: 25 } }}
    rightComponent={{ icon: 'login', color: '#fff', type: 'entypo' }}
  />
  <CoinList />
</View> */}
