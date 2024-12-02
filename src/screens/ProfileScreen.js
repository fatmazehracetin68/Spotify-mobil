import {View, Text, ScrollView, Image} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ProfileContext} from '../context/ProfileContext';
import round from 'lodash/round';

export default function ProfileScreen() {
  const {profileData, loading, error} = useContext(ProfileContext);
  const {name, image_url, followers_count, public_playlists} = profileData;

  // const formatFollowers = count => {
  //   if (count > 1000000) {
  //     return `${round(count / 1000000, 1)}M`;
  //   }
  //   if (count >= 1000) {
  //     return `${round(count / 1000, 1)}K`;
  //   }
  // };

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <ScrollView
        style={{marginTop: 50}}
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={{padding: 12}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Image
              source={{uri: image_url}}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                resizeMode: 'cover',
              }}
            />
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                {/* {name} */}
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                {/* {formatFollowers(followers_count)} followers */}
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '500',
              margin: 10,
            }}>
            Your Playlists
          </Text>
          <View style={{padding: '15'}}>
            {public_playlists.map(playlist => (
              <View
                key={playlist.uri}
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                }}>
                <Image
                  source={{uri: 'https://picsum.photos/200/300'}}
                  style={{width: 50, height: 50, borderRadius: 4}}
                />
                <View>
                  <Text style={{color: 'white'}}>{playlist.name}</Text>
                  <Text style={{color: 'white', marginTop: 7}}>
                    {/* {formatFollowers(followers_count)} followers */}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
