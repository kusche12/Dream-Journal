import * as React from 'react';
import detail from '../styles/detailstyles';
import global from '../styles/globalstyles';
import { Text, SafeAreaView, View } from 'react-native';

const DetailScreen = ({ route }) => {
    const { dream } = route.params;
    return (
        <SafeAreaView style={global.containerFlexStart}>
            <Text style={detail.header}>{dream.title}</Text>
            <Text style={detail.descr}>{dream.description}</Text>
            <View style={global.alignLeft}>
                <Text>Dreamed: {dream.dateDreamed}</Text>
                {dream.dateTimeUpdated && <Text>Updated: {dream.dateTimeUpdated}</Text>}
            </View>
        </SafeAreaView>
    )
}

export default DetailScreen;