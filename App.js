import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Routes';
import {SongProvider} from './src/context/SongContext';
import {AlbumsProvider} from './src/context/AlbumsContext';
import {ArtistProvider} from './src/context/ArtistContext';
import {ProfileProvider} from './src/context/ProfileContext';

export default function App() {
  return (
    <ProfileProvider>
      <ArtistProvider>
        <AlbumsProvider>
          <Navigation />
        </AlbumsProvider>
      </ArtistProvider>
    </ProfileProvider>
  );
}
