import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import LoadingScreen from './screens/LoadingScreen';
import data from './api/dreamData.json';

const Stack = createStackNavigator();

const App = () => {
  const [dreams, setDreams] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setDreams(data);
    setIsLoading(false);
  }, [data]);


  if (isLoading) {
    return (
      <LoadingScreen />
    )
  } else {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{dreams: dreams}} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

export default App;