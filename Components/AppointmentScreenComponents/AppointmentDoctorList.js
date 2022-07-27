import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Dimensions, View} from 'react-native';
import AppointmentDoctorCard from './AppointmentDoctorCard';
var {width} = Dimensions.get('window');

const AppointmentDoctorList = props => {
  const {item} = props;
  return (
    <TouchableOpacity
      // onPress={() =>
      //     props.navigation.navigate("Product Detail", { item: item})
      // }
      onPress={() => props.navigation.navigate('Doctor Details')}>
      <View>
        <AppointmentDoctorCard {...item} />
        {/*{item.pro_title}*/}
      </View>
    </TouchableOpacity>
  );
};

export default AppointmentDoctorList;
