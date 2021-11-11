import React from 'react';
import axios from 'axios';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import normalize from 'react-native-normalize';
import {Button, Gap, TextInput} from '../../components';
import {colors} from '../../utils';

const Login = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isError, setIsError] = React.useState(false);

  const data = {
    username,
    password,
  };

  const handleLogin = async () => {
    try {
      await axios.post('https://tasklogin.herokuapp.com/api/login', data);
      navigation.replace('Home');
    } catch (err) {
      if (err.response.status === 401) {
        setIsError(true);
      }
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.center}>
        <Text style={styles.text}>Login</Text>
      </View>
      <Gap height={12} />
      {isError ? (
        <Animatable.View
          animation={'flipInY'}
          duration={1000}
          style={styles.alertWrapper}>
          <Text style={styles.errorMsg}>Login failed. Please try again</Text>
        </Animatable.View>
      ) : null}
      <Gap height={12} />
      <View style={styles.input}>
        <TextInput
          placeholder="Masukkan username"
          value={username}
          onChangeText={value => setUsername(value)}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Masukkan Kata sandi"
          type="password"
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Gap height={18} />
        <Button text="Sign in" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.White,
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
  text: {
    width: normalize(153),
    textAlign: 'center',
    fontFamily: 'SFProText-SemiBold',
    fontSize: normalize(24),
    color: colors.BlackPearl,
  },
  alertWrapper: {
    backgroundColor: colors.WaterMelon,
    marginHorizontal: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(12),
    borderRadius: normalize(8),
  },
  errorMsg: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: normalize(14),
    color: colors.White,
  },
  input: {
    marginHorizontal: normalize(32),
  },
});
