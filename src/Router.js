import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

import CoinList from './components/CoinList';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='home' hideNavBar>
          <Scene key='coinList' component={CoinList} />
        </Scene>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Login' back />
          <Scene key='signUp' component={SignUpForm} title='Sign up' />
        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;
