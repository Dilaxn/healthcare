import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import Banner from '../../Components/HomeScreenComponents/Banner';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import DoctorContainer from '../Doctors/DoctorContainer';
import TextComp from '../../Components/TextComp';

const ServiceScreen = ({route, navigation}) => {
  const {type} = route.params;

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <View style={{height: 200, backgroundColor: 'red', width: '100%'}}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#fff',
            }}
            source={{uri: type.bgImg}}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{
            height: 100,
            backgroundColor: '#fff',
            marginTop: -50,
            width: '90%',
            borderRadius: 10,
            alignItems:'center',
            padding:10
          }}>
          <TextComp style={{fontFamily:'georgia',marginTop:10}}>
            "As a practicing neurologist, I place central importance in applying
            current science to the notion of disease prevention."
          </TextComp>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DoctorContainer navigation={navigation} type={type.service} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
    paddingBottom: 0,
  },
  pressed: {opacity: 0.5},
  homeTitles: {
    textTransform: 'uppercase',
    fontSize: wp('4%'),
    marginBottom: 5,
    marginTop: 7,
    marginLeft: 10,
    fontWeight: 'bold',
    fontFamily: 'PoppinsSB',
  },
  imageContainer: {
    width: '50%',
    height: 120,
    marginBottom: 10,
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  serviceTitle: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    color: '#fff',
    fontSize: wp('3.9%'),
    fontFamily: 'PoppinsEB',
    textTransform: 'uppercase',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(61, 61, 61, 0.48)',
    borderRadius: 10,
    width: '95%',
  },
});

export default ServiceScreen;
