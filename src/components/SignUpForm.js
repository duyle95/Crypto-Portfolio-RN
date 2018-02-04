import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class SignUpForm extends Component {
  render() {
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput />

        <FormLabel>Password</FormLabel>
        <FormInput />

        <FormLabel>Confirm Password</FormLabel>
        <FormInput />

        <Button
          title='Sign Up'
          buttonStyle={styles.signUpButtonStyle}
        />
        <Button
          title='Cancel'
          onPress={() => Actions.home()}
          buttonStyle={styles.cancelButtonStyle}
        />
      </View>
    );
  }
}

const styles = {
  signUpButtonStyle: {
    backgroundColor: 'blue'
  },
  cancelButtonStyle: {
    marginTop: 10
  }
}

export default SignUpForm;
