import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
  },
});

export default CardSection;
