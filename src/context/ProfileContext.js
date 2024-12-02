import {createContext} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';

const ProfileContext = createContext();
const ProfileProvider = ({children}) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProfileData = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/user_profile/',
      params: {
        id: 'nocopyrightsounds',
        playlistLimit: '10',
        artistLimit: '10',
      },
      headers: {
        'x-rapidapi-key': '4b76f1879cmsh6af2a2d567208ffp1bd0afjsn33da5bc90248',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      setProfileData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <ProfileContext.Provider
      value={{profileData, loading, error, getProfileData}}>
      {children}
    </ProfileContext.Provider>
  );
};

export {ProfileContext, ProfileProvider};
