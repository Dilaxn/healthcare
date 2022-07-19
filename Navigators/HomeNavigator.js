import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ServiceContainer from '../Screens/Services/ServiceContainer';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import AppointmentInformation from '../Screens/Appointments/AppointmentInformation';
import DoctorScreen from '../Screens/Doctors/DoctorScreen';
import MakeAppointment from '../Screens/Appointments/MakeAppointment';
import ServiceScreen from '../Screens/Services/ServiceScreen';

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
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Appointment Information"
        component={AppointmentInformation}
      />
      <Stack.Screen name="Doctor Details" component={DoctorScreen} />
      <Stack.Screen name="MakeAppointment" component={MakeAppointment} />
      <Stack.Screen name="Services" component={ServiceScreen} />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
