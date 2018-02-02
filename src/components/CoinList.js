import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import CoinDetail from './CoinDetail';
import * as actions from '../actions';
import { Spinner, Header } from './common';

class CoinList extends Component {
  componentWillMount() {
    this.props.fetchCoins();
  }

  renderList() {
    return this.props.coins.map(coin => {
      return <CoinDetail key={coin.id} coin={coin} />
    });
  }

  renderFirstTime() {
    if (this.props.coins.length === 0) {
      return <Spinner size="large" />;
    }

    return (
      <ScrollView>
        {this.renderList()}
      </ScrollView>
    );
  }


  render() {
    return (
      <ScrollView>
        <Header
          headerText='Crypto Market'
          onPress={() => Actions.auth()}
        />
        {this.renderFirstTime()}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ coins }) => {
  return {
    coins
  };
};

export default connect(mapStateToProps, actions)(CoinList);
