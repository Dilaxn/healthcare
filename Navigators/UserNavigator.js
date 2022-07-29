import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../Screens/UserScreen/UserScreen';
import PersonalDataScreen from '../Screens/UserScreen/PersonalDataScreen';
import AccountScreen from '../Screens/UserScreen/AccountScreen';
import Login from '../Screens/SignScreen/LoginScreen';
import Register from "../Screens/SignScreen/RegisterScreen";
import ResetMail from "../Screens/SignScreen/ResetMail";
import ResetOTP from "../Screens/SignScreen/ResetOTP";

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="My Profile"
        component={UserScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="Personal Data"
        component={PersonalDataScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="Account Screen"
        component={AccountScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Sign In"
        component={Login}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Sign Up"
        component={Register}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Reset Mail"
        component={ResetMail}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Reset OTP"
        component={ResetOTP}
      />

      {/*<Stack.Screen*/}
      {/*  name="Appointment Information"*/}
      {/*  component={AppointmentInformation}*/}
      {/*/>*/}
      {/*<Stack.Screen name="Doctor Details" component={DoctorScreen} />*/}
      {/*<Stack.Screen name="MakeAppointment" component={MakeAppointment} />*/}
      {/*<Stack.Screen name="Services" component={ServiceScreen} />*/}
    </Stack.Navigator>
  );
}

export default function UserNavigator() {
  return <MyStack />;
}
