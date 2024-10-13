import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './screens/Stack Navigation/Stack';
import {AuthProvider} from './src/context/authContext';
import {TripProvider} from './src/context/tripContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <TripProvider>
          <Stack />
        </TripProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
