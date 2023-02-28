import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button } from 'react-native';
import EventList from './Screens/EventList';
import AddEventViewState from './Screens/AddEventViewState';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={EventList}
          options={{title: 'События'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen 
        name="AddEventViewState" 
        component={AddEventViewState}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
  );
};
export const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};