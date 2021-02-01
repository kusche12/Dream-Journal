import * as React from 'react';
import DreamListView from '../components/DreamListView';
import date from 'date-and-time';
import { SafeAreaView, Text, TouchableOpacity, FlatList } from 'react-native';

// TODO: Display the FlatList. Get it to actually show.
const HomeScreen = ({ route }) => {
    const dreams = route.params.dreams;
    const renderItem = ({ item }) => (
        <DreamListView dream={item} />
    )

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello, world</Text>
            <FlatList 
                data={dreams}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
      </SafeAreaView>
    );
}

export default HomeScreen;