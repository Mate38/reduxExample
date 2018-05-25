import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, Input } from 'react-native';

class Home extends Component {
  render() {
    const { newValue } = this.props;

    return (
      <View>
        <Input type='text' />
        <Button>
          Click me!
        </Button>
        <Text>{newValue}</Text>
      </View>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps)(Home)