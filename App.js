import React, {Component} from 'react'
import {View, Text, TextInput, Button, FlatList, TouchableOpacity} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {LoginScreen} from './src/Login.js'
import {TestFlatListScreen} from './src/Flatlist.js'

const RootStack = createStackNavigator(
    {
      Login: LoginScreen,
      Flatlist: TestFlatListScreen
    },
    {
      initialRouteName: 'Login'
    }
  )

export default class App extends React.Component  {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <RootStack />
    )
  }
}