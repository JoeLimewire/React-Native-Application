import React, { Compoenent } from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './App';
import mainFeed from './Screens/mainFeed';

export const mainStack = create StackNavigator({

    Login:{
        Screen: Login
    }

    //SignUp Stack here

    mainFeed:{
        Screen: mainFeed
    }

});


export const Drawer = createDrawerNavigator({

    main: {screen: mainStack}

});