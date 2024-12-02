import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Home from './HomeScreen';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <SafeAreaView>
        <View style={{height: 80}} />
        <Entypo
          name="spotify"
          color={'white'}
          size={80}
          style={{textAlign: 'center'}}
        />
        <Text style={styles.loginTitle}>
          Millions of Songs Free on Spotify!
        </Text>
        <View style={{height: 80}} />
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('Main', {screen: 'Home'})}>
          <Text>Sign In with Spotify</Text>
        </Pressable>
        <Pressable style={styles.phoneButton}>
          <MaterialIcons name="phone-android" color="white" size={24} />
          <Text style={styles.phone}>Continue with phone number</Text>
        </Pressable>
        <Pressable style={styles.phoneButton}>
          <AntDesign name="google" size={24} color="white" />
          <Text style={styles.phone}>Continue width Google</Text>
        </Pressable>
        <Pressable style={styles.phoneButton}>
          <Entypo name="facebook" size={24} color="white" />
          <Text style={styles.phone}>Continue width Facebook</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  loginTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  loginButton: {
    backgroundColor: '#1DB954',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
  phone: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  phoneButton: {
    backgroundColor: '#131624',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    marginVertical: 10,
    borderWidth: 0.8,
    borderColor: '#c0c0c0',
    width: 300,
    borderRadius: 25,
    alignItems: 'center',
  },
});
