import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from "./Screens/BookTransactionScreen";
import SearchScreen from "./Screens/SearchScreen";
import {CreateAppContainer} from "react-navigation";
import {CreateBottomTabNavigator} from "react-navigation-tabs";

export default class App extends React.Component{
render() {
  return (
    <View>
  <AppContainer/>
    </View>
  );
}
}

const TabNavigator = CreateBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen},
})
const AppContainer = CreateAppContainer(TabNavigator);