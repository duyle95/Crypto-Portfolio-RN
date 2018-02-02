import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

import CoinList from './components/CoinList';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='home' hideNavBar>
          <Scene key='coinList' component={CoinList} />
        </Scene>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Login to App' back />
        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;
