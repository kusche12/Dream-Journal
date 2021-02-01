import * as React from 'react';
import home from '../styles/homestyles';
import { View, Text, TouchableOpacity } from 'react-native';

const DreamListView = ({ dream }) => {
    return (
        <View style={home.dreamList}>
            <TouchableOpacity>
                <Text>{dream.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DreamListView;