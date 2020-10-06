import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import colors from '../myAssets/theme';

export default function SignUp({ navigation, setKids }) {
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.accountSetup}>
        <Text style={styles.header}>Account Setup</Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <TextInput style={styles.textInput} placeholder="Full name" />
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder="Screen name"
            onChangeText={(e) => {
              setName(e);
            }}
          />
        </View>
        <View>
          <TextInput style={styles.textInput} placeholder="Bank name" />
        </View>
        <View>
          <TextInput style={styles.textInput} placeholder="Account no..." />
        </View>
        <View style={styles.centerbtn}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => navigation.navigate('ParentDashboard')}>
            <View style={styles.btn}>
              <Text style={styles.text}>Create Account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    color: colors.white,
    backgroundColor: colors.black,
    flex: 1,
  },
  accountSetup: {
    marginTop: 50,
  },
  header: {
    color: colors.white,
    fontSize: 48,
  },
  inputContainer: {
    marginTop: 56,
  },
  btn: {
    backgroundColor: colors.plum,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnContainer: {
    margin: 50,
    width: 250,
  },
  centerbtn: {
    alignItems: 'center',
  },
  textInput: {
    color: colors.black,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    width: 350,
    height: 60,
    backgroundColor: colors.white,
    margin: 20,
    fontSize: 24,
  },
  text: {
    color: colors.white,
    fontSize: 24,
  },
});
