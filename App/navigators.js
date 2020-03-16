import React, { Compoenent } from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './App';
import mainFeed from './Screens/mainFeed';

const mainStack = createStackNavigator({
    Login:{
        Screen: Login
    },
    //SignUp Option here
    mainFeed:{
        Screen: mainFeed
    }
});


export const Drawer = createDrawerNavigator({

    main: {screen: mainStack}

});

export default createAppContainer(mainStack);