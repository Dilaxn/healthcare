import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Banner from '../../Components/HomeScreenComponents/Banner';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderHome from '../../Components/HeaderHome';
import MyDoctorContainer from '../Doctors/MyDoctorContainer';

const MyDoctorScreen = ({navigation}) => {
  return (
    <View>
      <HeaderHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyDoctorContainer navigation={navigation} type="all" />
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

export default MyDoctorScreen;
