import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer , DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import css from '../theme/CommonCSS';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserNavigator from "./UserNavigator";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'#F9F9FE'
  },
};
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function SettingsScreen3({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function SettingsScreen4({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function SettingsScreen5({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="Home1"
        screenOptions={{
          tabBarActiveTintColor: '#0d53fc',
          tabBarShowLabel: false
        }}
        // tabBarOptions={{
        //   keyboardHidesTabBar: true,
        // }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <MIcons name="heart-pulse" color={color} size={30} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MIcons name="stethoscope" color={color} size={30} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings3"
          component={SettingsScreen3}
          options={{
            tabBarIcon: ({color}) => (
              // <Icon
              //   type="FontAwesome"
              //   name="stethoscope"
              //   color={color}
              //   size={30}
              // />
              <MIcons name="calendar-plus" color={color} size={30} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings5"
          component={SettingsScreen4}
          options={{
            tabBarIcon: ({color}) => (
              <MIcons name="bell-outline" color={color} size={30} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="user"
          component={UserNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <MIcons name="account-details" color={color} size={30} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
