import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useRoute} from '@react-navigation/native';

export default function InfoScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {album} = route.params || {};
  const {coverArt, name, artist, year} = album;
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView style={{marginTop: 50}}>
        <View style={{padding: 12}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" color="white" size={24} />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image source={{uri: coverArt}} style={{width: 200, height: 200}} />
          </View>
        </View>
        <Text
          style={{
            color: 'white',
            marginHorizontal: 12,
            marginTop: 10,
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          {artist}
        </Text>
        <View
          style={{
            marginHorizontal: 12,
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 7,
            marginTop: 10,
          }}>
          <Text
            style={{color: '#909090', fontSize: 13, fontWeight: '500'}}></Text>
          <Text style={{color: '#909090', fontSize: 13, fontWeight: '500'}}>
            Album {name}
          </Text>{' '}
        </View>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Pressable
            style={{
              backgroundColor: '#1db954',
              width: 30,
              height: 30,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <AntDesign name="arrowdown" color="white" size={20} />
          </Pressable>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="cross-bolnisi"
              size={24}
              color="#1db954"
            />
            <Pressable
              style={{
                backgroundColor: '#1db954',
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
              }}>
              <Entypo name="controller-play" size={24} color="white" />
            </Pressable>
          </View>
        </Pressable>

        <View>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 10,
            }}>
            <Pressable
              style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'start',
                  marginTOp: 5,
                  gap: 8,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: '500', fontSize: 16}}>
                  Album {name}
                </Text>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'start',
                    marginTOp: 5,
                    gap: 8,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: '500', fontSize: 16}}>
                    Artist {artist}
                  </Text>
                  <Text
                    style={{color: 'white', fontWeight: '500', fontSize: 16}}>
                    Year:{year}
                  </Text>
                </View>
              </View>
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
