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
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ProfileCard = ({navigation}) => {
  return (
    <View>
      <View style={styles.container3}>
        <View
          style={{
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}>
          <View
            style={{
              flex: 8,
              width: '100%',
              height: '100%',
            }}>
            <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'column'}}>
              <View style={{flex: 1, width: '100%'}} />
              <View style={{flex: 4}}>
                <View
                  style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                  }}>
                  <View style={{flex: 2, height: '100%'}} />
                  <View style={{flex: 4, height: '100%'}}>
                    <Image
                      style={{height: '100%', borderRadius: 5}}
                      source={{
                        uri: 'https://thumbs.dreamstime.com/b/doctor-piles-hospital-22148150.jpg',
                      }}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{flex: 2, height: '100%'}} />
                  <View style={{flex: 16, height: '100%'}}>
                    <View
                      style={{
                        flex: 1,
                        flexWrap: 'wrap',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                      }}>
                      <View style={{flex: 2, width: '100%'}}>
                        <TextComp style={{color: '#8d8d8d', marginTop: 5}}>
                          Good Morning
                        </TextComp>
                      </View>
                      <View style={{flex: 3, width: '100%'}}>
                        <TextComp
                          style={{
                            fontWeight: 'bold',
                            fontSize: 17,
                            color: '#000',
                          }}>
                          Dilakshan M.
                        </TextComp>
                      </View>
                    </View>
                  </View>
                  <View style={{flex: 2, height: '100%'}} />
                  <TouchableOpacity
                    style={{flex: 5, height: '100%', alignItems: 'center'}}
                    onPress={() =>
                      navigation.navigate('Appointment Information')
                    }>
                    <MIcons name="logout" color="#8d8d8d" size={width / 3 - 80} />
                  </TouchableOpacity>
                  <View style={{flex: 2, height: '100%'}} />
                </View>
              </View>
              <View style={{flex: 1}} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container3: {
    height: width / 3 - 35,
    paddingTop: 0,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 5,
    alignItems: 'center',
    backgroundColor: '#ebf1f9',
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
    textTransform: 'uppercase',
    fontSize: wp('4%'),
    marginBottom: 5,
    marginTop: 7,
    marginLeft: 10,
    fontWeight: 'bold',
    fontFamily: 'PoppinsSB',
    color: '#0f0f0f',
  },
});

export default ProfileCard;
