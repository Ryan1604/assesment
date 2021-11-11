import React from 'react';
import {StyleSheet, TextInput as TextInputRN, View} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../../utils';

const TextInput = ({placeholder, type, value, onChangeText, onEndEditing}) => {
  if (type === 'password') {
    return (
      <View style={styles.form}>
        <TextInputRN
          placeholder={placeholder}
          placeholderTextColor={colors.Grisaille}
          style={styles.inputPassword}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
        />
      </View>
    );
  }
  return (
    <TextInputRN
      placeholder={placeholder}
      placeholderTextColor={colors.Grisaille}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.ElectronBlue,
    borderRadius: normalize(8),
    paddingHorizontal: normalize(16),
    fontFamily: 'SFProText-Regular',
    fontSize: normalize(14),
    color: colors.BlackPearl,
    lineHeight: normalize(19),
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.ElectronBlue,
    borderRadius: normalize(8),
    paddingHorizontal: normalize(16),
    fontFamily: 'SFProText-Regular',
    fontSize: normalize(14),
    color: colors.BlackPearl,
    lineHeight: normalize(19),
  },
  textarea: {
    height: normalize(100),
    width: '100%',
    backgroundColor: colors.White,
    alignItems: 'flex-start',
    paddingHorizontal: normalize(16),
    borderWidth: 1,
    borderColor: colors.ElectronBlue,
    borderRadius: normalize(8),
    // Text
    fontFamily: 'SFProText-Regular',
    fontSize: normalize(14),
    color: colors.BlackPearl,
    lineHeight: normalize(19),
  },
  inputPassword: {
    width: '70%',
    fontFamily: 'SFProText-Regular',
    fontSize: normalize(14),
    color: colors.BlackPearl,
    lineHeight: normalize(19),
  },
  icon: {
    width: normalize(24),
    height: normalize(24),
  },
});
