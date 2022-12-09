import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import constants from './constants';
import Editor from '../screens/Editor';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={constants.route.Home}>
        <Stack.Screen name={constants.route.Editor} component={Editor} />
        <Stack.Screen name={constants.route.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
