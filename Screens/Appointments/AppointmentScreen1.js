import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Banner from '../../Components/HomeScreenComponents/Banner';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderHome from '../../Components/HeaderHome';
import DoctorContainer from '../Doctors/DoctorContainer';
import TextComp from '../../Components/TextComp';
import css from '../../theme/CommonCSS';
import MIcons from 'react-native-vector-icons/AntDesign';
import FIcons from 'react-native-vector-icons/Fontisto';
import brandBG from '../../theme/CommonCSS';
import AppointmentDoctorContainer from "../../Components/AppointmentScreenComponents/AppointmentDoctorContainer";

const AppointmentScreen1 = ({navigation}) => {
  return (
    <View>
      <HeaderHome />
      <View style={{height: hp(70)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppointmentDoctorContainer navigation={navigation} type="all" />
        </ScrollView>
      </View>
      <View
        style={[
          css.paddingB10,
          {
            height: hp(30),
            marginTop: -10,
            borderRadius: 15,
            alignItems: 'center',
            padding: 10,
            elevation: 8,
          },
        ]}>
        {/*<TextComp size={css.f20} style={[css.marginT20]}>Please select Doctor first</TextComp>*/}
        {/*<FIcons*/}
        {/*  name="stethoscope"*/}
        {/*  color="#000"*/}
        {/*  size={25}*/}
        {/*  style={{marginTop: 10}}*/}
        {/*/>*/}
        <View style={{alignItems: 'center', height: '100%', width: '100%'}}>
          <View style={{flex: 1, height: '100%', width: '100%'}}>
            <View
              style={{
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',
                marginBottom: -20,
              }}>
              <View style={{flex: 1, height: '100%'}} />
              {/*<Icon name={service} color="#5ba2f4" size={80} />*/}
              <View style={{flex: 10, height: '100%'}}>
                <View
                  style={{flex: 1, flexWrap: 'wrap', flexDirection: 'column'}}>
                  <View style={{flex: 1, width: '100%'}} />
                  <View style={{flex: 5, Height: '100%'}}>
                    <TextComp style={{fontWeight: 'bold'}}>2022/10/02</TextComp>
                    <TextComp>10.00 a.m</TextComp>
                  </View>
                  {/*<View style={{flex: 1, Height: '100%'}} />*/}
                </View>
              </View>
              <View style={{flex: 10, width: '100%'}}>
                <View
                  style={{flex: 1, flexWrap: 'wrap', flexDirection: 'column'}}>
                  <View style={{flex: 1, width: '100%'}} />
                  <View
                    style={{flex: 5, Height: '100%', alignItems: 'flex-end'}}>
                    <TextComp style={{fontWeight: 'bold', opacity: 0.7}}>
                      3 Days
                    </TextComp>
                    <TextComp style={{opacity: 0.7}}>From Today</TextComp>
                  </View>
                  <View style={{flex: 1, Height: '100%'}} />
                </View>
              </View>
              <View style={{flex: 1, width: '100%'}} />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('MakeAppointment')}
              style={{
                flex: 1,
                Height: '100%',
                alignItems: 'center',
                marginTop: -30,
              }}>
              <TextComp style={[css.brandC]}>Continue >></TextComp>
            </TouchableOpacity>
          </View>
          {/*<Text>{_id}</Text>*/}
        </View>
      </View>
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

export default AppointmentScreen1;
