import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Dimensions, View} from 'react-native';
import ServiceCard from './ServiceCard';
var {width} = Dimensions.get('window');

const ServiceList = props => {
  const {item} = props;
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('ServiceScreen', {type: item})
      }>
      <View>
        <ServiceCard {...item} />
        {/*{item.pro_title}*/}
      </View>
    </TouchableOpacity>
  );
};

export default ServiceList;
