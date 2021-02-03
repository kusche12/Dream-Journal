import * as React from 'react';
import DreamListView from '../components/DreamListView';
import { SafeAreaView, FlatList } from 'react-native';

const HomeListScreen = ({ route, navigation }) => {
    const dreams = route.params.dreams;

    const renderItem = ({item, index}) => (
        <DreamListView dream={item} index={index} navigation={navigation}/>
    );

    return (
        <SafeAreaView>
            <FlatList
                data={dreams.dreams}
                renderItem={renderItem}
                keyExtractor={item => item.id} 
                />
        </SafeAreaView>
    );
}

export default HomeListScreen;