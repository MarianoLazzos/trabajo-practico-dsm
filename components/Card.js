import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    height: 80,
    overflow: 'hidden',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
};

export default Card;
