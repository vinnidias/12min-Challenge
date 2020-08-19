import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import AudiobookList from './src/screens/AudiobookList'
import AudioPlayer from './src/screens/AudioPlayer'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"AudiobookList"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AudiobookList" component={AudiobookList} />
        <Stack.Screen name="AudioPlayer" component={AudioPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};