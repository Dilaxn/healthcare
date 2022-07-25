import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
var {width} = Dimensions.get('window');

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import IIcons from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';

const AccountScreen = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginBottom: 20}}>
        <View style={styles.container3}>
          <View
            style={{
              height: wp('40%'),
              width: wp('40%'),
              borderRadius: 20,
              borderColor: '#fff',
              borderWidth: 5,
            }}>
            <Image
              style={{
                height: '100%',
                borderRadius: 20,
              }}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/doctor-piles-hospital-22148150.jpg',
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={{marginLeft: 12, alignItems: 'center'}}>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#fff',
              width: width - 24,
              padding: 15,
              borderColor: '#aaaaaa',
              borderRadius: 3,
              elevation: 8,
            }}>
            <AntIcons name="user" color="#000" size={wp('6%')} />
            <Text style={{color: '#000', fontSize: 18, marginLeft: 10}}>
              Dilakshan M.
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#fff',
              width: width - 24,
              padding: 15,
              elevation: 8,
              borderColor: '#aaaaaa',
              borderRadius: 3,
            }}>
            <IIcons name="ios-calendar-outline" color="#000" size={wp('6%')} />
            <Text style={{color: '#000', fontSize: 18, marginLeft: 10}}>
              1998.12.08
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#fff',
              width: width - 24,
              padding: 15,
              elevation: 8,
              borderColor: '#aaaaaa',
              borderRadius: 3,
            }}>
            <IIcons name="ios-call-outline" color="#000" size={wp('6%')} />
            <Text style={{color: '#000', fontSize: 18, marginLeft: 10}}>
              076-464-2025
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#fff',
              width: width - 24,
              padding: 15,
              elevation: 8,
              borderColor: '#aaaaaa',
              borderRadius: 3,
            }}>
            <IIcons name="md-location-outline" color="#000" size={wp('6%')} />
            <Text style={{color: '#000', fontSize: 18, marginLeft: 10}}>
              57A, 1st lane, suduganga watta, kaludewala, Matale.
            </Text>
          </View>
        </View>
      </View>
      {/*<View style={{alignItems: 'center'}}>*/}
      {/*  <View*/}
      {/*    style={{*/}
      {/*      borderRadius: 4,*/}
      {/*      borderColor: '#0d53fc',*/}
      {/*      borderWidth: 5,*/}
      {/*      marginTop: 20,*/}
      {/*      backgroundColor: '#0d53fc',*/}
      {/*      flexDirection: 'row',*/}
      {/*      padding: 5,*/}
      {/*    }}>*/}
      {/*    <AntIcons name="form" color="#fff" size={wp('5%')} />*/}
      {/*    <Text style={{color: '#fff'}}> UPDATE </Text>*/}
      {/*  </View>*/}
      {/*</View>*/}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container3: {
    paddingTop: 0,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 5,
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: '#aaaaaa',
    marginTop: 5,
    fontSize: 18,
    paddingLeft: 12,
    width: width - 24,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#aaaaaa',
  },
  image: {
    width: '100%',
    height: '70%',
    backgroundColor: 'transparent',
    resizeMode: 'contain',
    top: 0,
    // borderTopEndRadius:10,
    borderTopLeftRadius: 10,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 60,
    backgroundColor: 'white',
    width: '100%',
    // borderTopEndRadius:10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
  },
  price: {
    fontSize: 20,
    marginTop: 10,
  },
  homeTitles: {
    fontSize: wp('6%'),
    marginBottom: 5,
    marginTop: 7,
    marginLeft: 12,
    fontWeight: 'bold',
    fontFamily: 'PoppinsSB',
    color: '#0f0f0f',
  },
});

export default AccountScreen;
