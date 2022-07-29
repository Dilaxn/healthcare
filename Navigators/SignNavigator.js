import * as React from 'react';
import {Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/SignScreen/LoginScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
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

export default function SignNavigator() {
  return <MyStack />;
}
