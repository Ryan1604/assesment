import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../../utils';

const Button = ({text, type, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.ElectronBlue,
    paddingVertical: normalize(14),
    borderRadius: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: normalize(16),
    color: colors.White,
    lineHeight: normalize(19),
    letterSpacing: 0.16,
  },
});
