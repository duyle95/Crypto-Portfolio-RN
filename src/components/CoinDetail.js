import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';

import formatMoney from '../helpers/accounting';
import { Card, CardSection, Button } from './common';

const CoinDetail = ({ coin }) => {
  const { id, name, symbol, rank, price_usd, percent_change_24h, market_cap_usd } = coin;
  const image_uri = `https://files.coinmarketcap.com/static/img/coins/32x32/${id}.png`;
  const coin_url = `https://coinmarketcap.com/currencies/${id}/`;

  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    rankContainerStyle,
    rankTextStyle,
    toggleTextStyle
  } = styles;

  const render24hChange = () => {
    if (parseFloat(percent_change_24h) >= 0) {
      return <Text style={{ color: 'green' }}>{`${percent_change_24h}%`}</Text>;
    } else {
      return <Text style={{ color: 'red' }}>{`${percent_change_24h}%`}</Text>;
    }
  }

  return (
    <Card>
      <CardSection>
        <View style={rankContainerStyle}>
          <Text style={rankTextStyle}>{rank}</Text>
        </View>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{ uri: image_uri }}
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{`${name} (${symbol})`}</Text>
          <Text>{`$${price_usd}`}</Text>
          <Text>{render24hChange()}</Text>
        </View>
      </CardSection>

      <CardSection>
        <View style={rankContainerStyle}>
          <Text style={toggleTextStyle}>MARKET CAP</Text>
          <Text>{formatMoney(market_cap_usd)}</Text>
        </View>
        <View style={rankContainerStyle}>
          <Text style={toggleTextStyle}>VOLUME (24H)</Text>
          <Text>{formatMoney(coin['24h_volume_usd'])}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button
          onPress={() => Linking.openURL(coin_url)}>
          {`Check ${name} at CMC`}
        </Button>
      </CardSection>
    </Card>
  );
}

const styles = {
  rankContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  rankTextStyle: {
    fontSize: 30
  },
  toggleTextStyle: {
    fontSize: 18
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 40,
    width: 40
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default CoinDetail;
