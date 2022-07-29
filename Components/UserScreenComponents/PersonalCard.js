import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
var {width} = Dimensions.get('window');
import css from '../../theme/CommonCSS';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import TextComp from '../../Components/TextComp';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MIcons from 'react-native-vector-icons/AntDesign';
import IOcons from 'react-native-vector-icons/Ionicons';
const PersonalCard = ({navigation}) => {
  return (
    <View>
      <View style={styles.container3}>
        <Text style={styles.homeTitles}>Personal</Text>
        <View style={{marginLeft: 10}}>
          <TouchableOpacity
            style={{
              marginLeft: 12,
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
            }}
            onPress={() => navigation.navigate('Sign In')}>
            <MIcons name="login" color="#000" size={25} />
            <Text style={{marginLeft: 10, fontSize: wp('5%'), color: '#000'}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 12,
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
            }}
            onPress={() => navigation.navigate('Account Screen')}>
            <MIcons name="user" color="#000" size={25} />
            <Text style={{marginLeft: 10, fontSize: wp('5%'), color: '#000'}}>
              Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 12,
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
            }}
            onPress={() => navigation.navigate('Personal Data')}>
            <IOcons name="clipboard-outline" color="#000" size={25} />
            <Text style={{marginLeft: 10, fontSize: wp('5%'), color: '#000'}}>
              Personal Data
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container3: {
    paddingTop: 0,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 5,
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

export default PersonalCard;
