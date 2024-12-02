import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import ArtistCart from '../components/ArtistCart';
import {AlbumsContext} from '../context/AlbumsContext';
import AlbumCard from '../components/AlbumCard';
import Loader from '../components/Loader';
import Error from '../components/Error';
import {ArtistContext} from '../context/ArtistContext';

export default function HomeScreen() {
  const navigation = useNavigation();

  const {
    albums,
    loading: albumsLoading,
    error: albumsError,
  } = useContext(AlbumsContext);

  const {
    artists,
    loading: artistLoading,
    error: artistLaoding,
  } = useContext(ArtistContext);

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      {albumsLoading ? (
        <Loader />
      ) : albumsError ? (
        <Error error={albumsError} />
      ) : (
        <ScrollView
          style={{marginTop: 50}}
          contentContainerStyle={{paddingBottom: 100}}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
              }}>
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
                }}
                style={{
                  width: 40,
                  height: 40,
                  resizeModeMode: 'cover',
                  borderRadius: 20,
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Message
              </Text>
            </View>
            <MaterialCommunityIcons
              name="lightning-bolt-outline"
              color="white"
              size={24}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginHorizontal: 12,
              marginVertical: 5,
            }}>
            <Pressable
              style={{
                backgroundColor: '#282828',
                padding: 10,
                borderRadius: 30,
              }}>
              <Text style={{color: 'white', fontSize: 15}}>Music</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#282828',
                padding: 10,
                borderRadius: 30,
              }}>
              <Text style={{color: 'white', fontSize: 15}}>
                Podcast & Shows
              </Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => navigation.navigate('Liked')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                flex: 1,
                marginHorizontal: 10,
                marginVertical: 8,
                backgroundColor: '#202020',
                borderRadius: 4,
              }}>
              <LinearGradient colors={['#33006f', '#ffffff']}>
                <Pressable
                  style={{
                    width: 55,
                    height: 55,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="heart" color="white" size={24} />
                </Pressable>
              </LinearGradient>
              <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
                Liked Songs
              </Text>
            </Pressable>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                flex: 1,
                marginHorizontal: 10,
                marginVertical: 8,
                backgroundColor: '#202020',
                borderRadius: 4,
              }}>
              <Image
                source={{uri: 'https://picsum.photos/100/100'}}
                style={{width: 55, height: 55}}
              />
              <View>
                <Text
                  style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
                  Hippop
                </Text>
              </View>
            </View>
            <Pressable
              style={{
                marginVertical: 8,
                marginHorizontal: 10,
                backgroundColor: '#282828',
                flexDirection: 'row',
                borderRadius: 4,
              }}>
              <Image
                source={{uri: 'https://picsum.photos/200/300'}}
                style={{width: 55, height: 55}}
              />
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 8,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
                  name
                </Text>
              </View>
            </Pressable>
            <Text
              style={{
                color: 'white',
                marginHorizontal: 10,
                fontSize: 19,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Your Top Artist
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {artists?.map((artist, index) => (
                <ArtistCart key={index} artist={artist} />
              ))}
            </ScrollView>
            <View style={{height: 10}} />
            <Text
              style={{
                fontSize: 19,
                color: 'white',
                fontWeight: 'bold',
                marginHorizontal: 10,
                marginTop: 10,
              }}>
              Popular Albums
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {albums?.map((album, index) => (
                <AlbumCard album={album} key={index} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </LinearGradient>
  );
}
