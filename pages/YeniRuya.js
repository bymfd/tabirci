import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'
export default class Mesajlar extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

                <LinearGradient
                    colors={['purple', 'white']}
                    style={styles.container}
                    start={{ x: 0, y: 0}}
                    end={{ x: 1, y: 1 }}
                >

                    <Text>Home Screen</Text>
                </LinearGradient>


        );
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#ffffff",
        marginTop:10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        marginLeft: 16,
        flex: 1,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC"
    },
    image:{
        width:45,
        height:45,
        borderRadius:20,
        marginLeft:20
    },
    time:{
        fontSize:11,
        color:"#808080",
    },
    name:{
        fontSize:16,
        fontWeight:"bold",
    },
});
