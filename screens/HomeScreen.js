import * as React from 'react';
import CreateScreen from '../screens/CreateScreen';
import HomeListScreen from '../screens/HomeListScreen';
import DetailScreen from '../screens/DetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import home from '../styles/homestyles';

const Stack = createStackNavigator();

const HomeScreen = ({ route }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'tan' }
        }}>
            <Stack.Screen
                name="Home"
                component={HomeListScreen}
                initialParams={route.params} 
                options={({ navigation }) => ({
                    title: 'Dream Journal',
                    headerRight: () => (
                        <TouchableOpacity style={ home.headerRight }onPress={() => navigation.navigate('Create')}>
                            <Ionicons name="md-create-outline" size={24} color="black" />
                        </TouchableOpacity>
                    )
                })}
                />
            <Stack.Screen
                name="Create"
                component={CreateScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <TouchableOpacity style={ home.headerRight }onPress={() => navigation.navigate('Home')}>
                            <Feather name="check-circle" size={22} color="black" />
                        </TouchableOpacity>
                    )
                })}

            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
            />
        </Stack.Navigator>
    );
}

export default HomeScreen;