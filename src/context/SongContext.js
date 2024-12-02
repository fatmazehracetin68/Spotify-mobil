import {createContext, useState} from 'react';

const Song = createContext();
const SongProvider = ({children}) => {
  const [congs, setSongs] = useState();
  return <Song.Provider value={{}}>{children}</Song.Provider>;
};

export {SongProvider, Song};
