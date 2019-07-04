import React, { Component } from 'react'

import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import DrawerMenu from './DrawerMenu'
import Categories from '../screens/Categories'
import VideoScreen from '../screens/VideoScreen'
import UserCategoryScreen from '../screens/UserCategoryScreen';

const DrawerNavigator = createDrawerNavigator(
  {
    Categories: { screen: UserCategoryScreen },
    VideoScreen: { screen: VideoScreen },
  },
  {
    initialRouteName: 'Categories',
    contentComponent: DrawerMenu,
    drawerWidth: 300,
  }
)

const DrawerLayoutContainer = createAppContainer(DrawerNavigator)
export default DrawerLayoutContainer
