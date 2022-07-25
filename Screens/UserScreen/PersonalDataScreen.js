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
} from 'react-native';
var {width} = Dimensions.get('window');

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import IIcons from 'react-native-vector-icons/Ionicons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import TextComp from '../../Components/TextComp';
import css from '../../theme/CommonCSS';

const PersonalDataScreen = ({navigation}) => {
  return (
    <View>
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
          <View
            style={{
              height: wp('8%'),
              width: wp('8%'),
              borderRadius: 2,
              borderColor: '#fff',
              borderWidth: 5,
              marginTop: -wp('8%') + 2,
              backgroundColor: '#fff',
            }}>
            <IIcons name="pencil-outline" color="#0d53fc" size={wp('5%')} />
          </View>
        </View>
      </View>
      <View style={{marginLeft: 12}}>
        <View style={{marginTop: 10}}>
          <TextComp style={{color: '#000', fontSize: 18}}>Name</TextComp>
          <TextInput
            placeholder="Name"
            value="Dilakshan M."
            style={styles.textInput}
          />
        </View>
        <View style={{marginTop: 10}}>
          <TextComp style={{color: '#000', fontSize: 18}}>D.O.B</TextComp>
          <TextInput
            placeholder="Name"
            value="Dilakshan M."
            style={styles.textInput}
          />
        </View>

        <View style={{marginTop: 10}}>
          <TextComp style={{color: '#000', fontSize: 18}}>
            Phone Number
          </TextComp>
          <TextInput
            placeholder="Name"
            value="Dilakshan M."
            style={styles.textInput}
          />
        </View>

        <View style={{marginTop: 10}}>
          <TextComp style={{color: '#000', fontSize: 18}}>Address</TextComp>
          <TextInput
            placeholder="Name"
            value="Dilakshan M."
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            borderRadius: 4,
            borderColor: '#0d53fc',
            borderWidth: 5,
            marginTop: 20,
            backgroundColor: '#0d53fc',
            flexDirection: 'row',
            padding: 5,
          }}>
          <AntIcons name="form" color="#fff" size={wp('5%')} />
          <Text style={{color: '#fff'}}> UPDATE </Text>
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

export default PersonalDataScreen;
