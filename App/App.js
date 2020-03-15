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

    const [data, setData] = useState([
        {name: 'Jordan Edwards', location: 'London', content:'Just bought my first house!'},
        {name: 'Connor Frost', location: 'Manchester', content:'Do you think I could use popcorn as earplugs?'},
        {name: 'Amy Marshall', location: 'Essex', content:"I don't like popcorn anymore"},
        {name: 'Connor Frost', location: 'Manchester', content:'Just noticed that popcorn are useful earplugs'},
        {name: 'Connor Frost', location: 'Manchester', content:'Just noticed that popcorn are useful earplugs'},
        {name: 'Connor Frost', location: 'Manchester', content:'Just noticed that popcorn are useful earplugs'},
        {name: 'Connor Frost', location: 'Manchester', content:'The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending flex-direction value. This is the default value.'},
        {name: 'Connor Frost', location: 'Manchester', content:'Just noticed that popcorn are useful earplugs'},

    ]);

    return ( <>

        { /* This controls the top bar of the application */ }
        <StatusBar barStyle = "dark-content"
        backgroundColor = "yellowgreen" />

        <View
                  style={{
                    height: 50,
                    marginTop: 0,
                    backgroundColor: 'yellowgreen',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'left',
                      fontWeight: 'bold',
                      fontSize: 18,
                      left:40
                    }}>
                    Chittr
                  </Text>
                </View>

        { /* This is adding a view as well as two input boces and a button */ }
        <View style = {{padding: 0}}>

        <ScrollView>
               {data.map((item) => {
                return(
                    <View style = {styles.chit}>
                        <Text style={styles.userLocation}>{item.location}</Text>
                        <Image
                        style={styles.userImage}
                        source={{uri: 'https://img.icons8.com/office/64/000000/earth-element.png'}}
                        />
                        <Text style={styles.userName}>{item.name}</Text>

                        <Text style={styles.userContent}>{item.content}</Text>
                    </View>
                )
               })}
        </ScrollView>
        </View>
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

    chit:{
        marginTop:2,
        padding:15,
        backgroundColor:'#f4eec7',
        flexDirection:'column',
    },

    userImage:{
        width:60,
        height:60,
        position:'absolute'
    },
    userName:{
        fontSize:25,
        color:'#fe9801',
        position:'absolute',
        left:60,
        top:0
    },
    userLocation:{
        alignSelf:'flex-end',
        color:'grey'
    },
    userContent:{
        alignSelf:'stretch',
        fontSize:18,
        paddingTop:30

    },

});

export default App;