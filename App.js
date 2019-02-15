import React, {Component} from 'react';
import {createStackNavigator,  createAppContainer} from 'react-navigation';
import ScreenSatu from './komponen/ScreenSatu'
import ScreenDua from './komponen/ScreenDua';
import ScreenTiga from './komponen/ScreenTiga';
// import Iconku from 'react-native-vector-icons/Ionicons';
var AppNavigator = createStackNavigator({
  
    HalSatu: ScreenSatu,
    HalDua: ScreenDua,
    HalTiga: ScreenTiga,
  },
  {
    initialRouteName: 'HalSatu',
    // stacknav
    headerMode: 'float',
    headerTransitionPreset: 'fade-in-place',
  }
)

export default createAppContainer(AppNavigator);