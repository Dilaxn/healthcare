import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../Screens/UserScreen/UserScreen';
import PersonalDataScreen from '../Screens/UserScreen/PersonalDataScreen';
import AccountScreen from '../Screens/UserScreen/AccountScreen';
import MyDoctorScreen from '../Screens/MyDoctorScreen/MyDoctorScreen';
import AppointmentScreen1 from "../Screens/Appointments/AppointmentScreen1";
import AppointmentBookedScreen from "../Screens/Appointments/AppointmentBookedScreen";

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
        name="Select Doctor"
        component={AppointmentScreen1}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Book Appointment"
        component={AppointmentBookedScreen}
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

export default function AppointmentNavigator() {
  return <MyStack />;
}
