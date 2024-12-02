import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const AlbumsContext = createContext();

const AlbumsProvider = ({children}) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'Türkiye de popüler olanlar',
        type: 'albums',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5',
      },
      headers: {
        'x-rapidapi-key': '4b76f1879cmsh6af2a2d567208ffp1bd0afjsn33da5bc90248',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      const albumsItem = response.data?.albums?.items?.map(item => ({
        uri: item?.data?.uri,
        name: item?.data?.name,
        artist: item?.data?.artist?.items?.[0]?.profile?.name,
        coverArt: item?.data?.coverArt?.sources?.[0]?.url,
        year: item?.data?.date?.year,
      }));
      setAlbums(albumsItem);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <AlbumsContext.Provider value={{albums, loading, error}}>
      {children}
    </AlbumsContext.Provider>
  );
};

export {AlbumsContext, AlbumsProvider};
