import axios from 'axios';
import {Alert} from 'react-native';
const deletTrip = async id => {
  try {
    const res = await axios.delete(
      `http://192.168.1.9:5000/api/trip/delete-trip/${id}`,
    );
    if (res.data.status == true) {
      Alert.alert('Trip deleted successfully');
      console.log(res.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default deletTrip;
