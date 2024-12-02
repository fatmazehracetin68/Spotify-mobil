import {createContext, useEffect, useState} from 'react';
import axios from 'axios';

const ArtistContext = createContext();

const ArtistProvider = ({children}) => {
  const [artists, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getArtist = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'Türkiye de popüler',
        type: 'artists',
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
      try {
        const response = await axios.request(options);
        console.log('API Response:', response.data.artists.items);
        const data = response.data.artists.items;
        setArtist(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching artists:', error);
        setError(error);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getArtist();
  }, []);
  return (
    <ArtistContext.Provider value={{artists, loading, error}}>
      {children}
    </ArtistContext.Provider>
  );
};

export {ArtistContext, ArtistProvider};
