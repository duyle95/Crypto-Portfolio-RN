import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

const Header = (props) => {
  const { textStyle, viewStyle, iconStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      <Icon
        name='login'
        type='entypo'
        iconStyle={iconStyle}
        onPress={props.onPress}
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30,
    alignSelf: 'center'
  },
  iconStyle: {
    alignSelf: 'flex-end'
  }
};

export { Header };
