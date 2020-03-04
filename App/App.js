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

     {/* This Mmanages the words in the Text Input */}
    const [entered,setEntered] = useState('');
     {/* This manages the list at the bottom of the page */}
    const [list, setList] = useState([]);

    const stateInputHandler = (enteredText) =>{
      {/* This sets the use state to wehatever was in the text box */}
        setEntered(enteredText);
    };

    const stateAddHandler = () =>{
      {/* This is updating the entire list.
          "...list" gets the entirity of the old list
          and we add the entered username to this list
      */}
      setList([...list, entered]);
  };

  return (
    <>

        {/* This controls the top bar of the application */}
        <StatusBar barStyle="dark-content" backgroundColor="skyblue"/>

        {/* This is adding a view as well as two input boces and a button */}
        <View style={{padding:30}}>

            <TextInput placeholder="Username" 
            onChangeText={stateInputHandler}
            value={entered}
            />

            <TextInput placeholder="Password" />
            <Button title="LOGIN" onPress={stateAddHandler}/>
        </View>


      <SafeAreaView>
        <ScrollView style={styles.scrollView} >
          {list.map((entered) => <Text>{entered}</Text>)}
        </ScrollView>
      </SafeAreaView>


    </>
  );
};

{/* These are the styles of this screen application */}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
