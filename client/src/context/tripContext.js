import {createContext, useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from './authContext';

const TripContext = createContext();

//Provider
const TripProvider = props => {
  const [trip, setTrip] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state] = useContext(AuthContext);
  const token = state.token;

  const getAllTrips = async () => {
    setLoading(true);
    try {
      const {data} = await axios.get(
        'http://192.168.1.9:5000/api/user-trip/get-user-trip/',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setLoading(false);
      setTrip(data?.userTrip);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // inintal  posts
  useEffect(() => {
    getAllTrips();
  }, []);

  return (
    <TripContext.Provider value={[trip, setTrip, getAllTrips]}>
      {props.children}
    </TripContext.Provider>
  );
};

export {TripContext, TripProvider};
