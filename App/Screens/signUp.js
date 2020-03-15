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
    StatusBar
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

    { /* This Manages the words in the Text Input */ }
    const [entered, setEntered] = useState(''); { /* This manages the list at the bottom of the page */ }
    const [list, setList] = useState([]);

    const stateInputHandler = (enteredText) => {
        { /* This sets the use state to whatever was in the text box */ }
        setEntered(enteredText);



    };

    const stateAddHandler = () => {
        {/* This is updating the entire list.
                      "...list" gets the entirity of the old list
                      and we add the entered username to this list
                  */
        }
        setList([...list, entered]);
    };

    return ( <>

        { /* This controls the top bar of the application */ }
        <StatusBar barStyle = "dark-content"
        backgroundColor = "skyblue" />

        <Text style={styles.title}>Sign Up</Text>

        { /* This is adding a view as well as two input boces and a button */ }
        <View style = {{padding: 30}}>

        <TextInput placeholder = "First Name"
        onChangeText = { stateInputHandler }
        value = { entered }
        style={styles.textInput}
        />

        <TextInput placeholder = "Last Name"
                onChangeText = { stateInputHandler }
                value = { entered }
                style={styles.textInput}
                />

         <TextInput placeholder = "Email"
                 onChangeText = { stateInputHandler }
                 value = { entered }
                 style={styles.textInput}
                 />

        <TextInput placeholder = "Password"
        style={styles.textInput}
        />

            <View style={{padding:40}}>
                <Button title = "Create Account"
                onPress = { stateAddHandler }
                color="yellowgreen"

                />
            </View>
        </View>
        </>
    );
};

{ /* These are the styles of this screen application */ }
const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color:"#fe9801",
        fontSize:50,
        padding:25,
    },
    textInput: {
        backgroundColor:"#f4eec7",
        borderRadius:10,
        padding:10,
        margin:10,
    },
    body: {
        backgroundColor: Colors.white,
    },
});

export default App;