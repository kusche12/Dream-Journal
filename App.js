import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import CreateScreen from './screens/CreateScreen';
import LoadingScreen from './screens/LoadingScreen';
import SettingsScreen from './screens/SettingsScreen';
import data from './api/dreamData.json';

const Tab = createBottomTabNavigator();

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
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} initialParams={{dreams}}/>
          <Tab.Screen name="Create" component={CreateScreen} />
          <Tab.Screen name="Profile" component={UserScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
  }
}

export default App;