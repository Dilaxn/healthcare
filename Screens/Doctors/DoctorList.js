import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Dimensions, View} from 'react-native';
import DoctorCard from './DoctorCard';
var {width} = Dimensions.get('window');

const DoctorList = props => {
  const {item} = props;
  return (
    <TouchableOpacity
      // onPress={() =>
      //     props.navigation.navigate("Product Detail", { item: item})
      // }
      onPress={() => props.navigation.navigate('DoctorDetails')}>
      <View>
        <DoctorCard {...item} />
        {/*{item.pro_title}*/}
      </View>
    </TouchableOpacity>
  );
};

export default DoctorList;
