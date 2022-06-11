import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children, style, secondary = false }) => {
  const styles = StyleSheet.create({
    textStyle: {
      alignSelf: 'center',
      color: secondary ? '#fff' : '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingVertical: 19,
    },

    buttonStyle: {
      flex: 1,
      backgroundColor: secondary ? 'rgba(0, 122, 255, 0.6)' : null,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: '#007aff',
      margin: 5,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
