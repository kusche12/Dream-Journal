import * as React from 'react';
import home from '../styles/homestyles';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

const DreamListView = ({ dream, index, navigation }) => {
    return (
        <SafeAreaView style={index%2==0 ? home.dreamList : [home.dreamList, {backgroundColor: '#e8e8e8'}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {dream})}>
                <Text style={home.dreamText}>{dream.title}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default DreamListView;