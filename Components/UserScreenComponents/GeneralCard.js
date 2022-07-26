import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button,
  TouchableOpacity,
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
const GeneralCard = ({navigation}) => {
  return (
    <View>
      <View style={styles.container3}>
        <Text style={styles.homeTitles}>General</Text>
        <View style={{marginLeft: 10}}>
          <View
            style={{
              marginLeft: 12,
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <MIcons name="user" color="#000" size={25} />
            <Text style={{marginLeft: 10, fontSize: wp('5%')}}>
              Notification
            </Text>
          </View>
          <View
            style={{
              marginLeft: 12,
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <IOcons name="shield-checkmark-outline" color="#000" size={25} />
            <Text style={{marginLeft: 10, fontSize: wp('5%')}}>Security</Text>
          </View>
          <View
            style={{
              marginLeft: 12,
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <IOcons name="ios-help" color="#000" size={25} />
            <Text style={{marginLeft: 10, fontSize: wp('5%')}}>Help</Text>
          </View>
          <View
            style={{
              marginLeft: 12,
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <IOcons name="information-circle-outline" color="#000" size={25} />
            <Text style={{marginLeft: 10, fontSize: wp('5%')}}>About</Text>
          </View>
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

export default GeneralCard;
