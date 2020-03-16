/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
    Image
} from 'react-native';

import {
    Header,
    Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {


    return ( <>

        { /* This controls the top bar of the application */ }
        <StatusBar barStyle = "dark-content"
        backgroundColor = "yellowgreen" />
            <Text style={styles.title}>App.js</Text>
        </>
    );
};

{ /* These are the styles of this screen application */ }
const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color:"#fe9801",
        fontSize:100,
        padding:50,
    },
    textInput: {
        backgroundColor:"#f4eec7",
        borderRadius:10,
        padding:10,
        margin:10,
    },
    header:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
    },
    body: {
        backgroundColor: Colors.white,
    },
});

export default App;