import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button,
  TextInput,
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
import IOcons from 'react-native-vector-icons/Ionicons';
import FIcons from 'react-native-vector-icons/Fontisto';
import MUIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcons from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const ResetOTP = props => {
  const {_id, name, service, pic, rate, status} = props;
  const [isUser, setIsUser] = useState(true);
  const [show, setShow] = useState(false);
  const navigation = props.navigation;
  const showAlert = () => {
    setShow(true);
  };

  const hideAlert = () => {
    setShow(false);
  };
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{
            height: widthPercentageToDP(60),
            width: widthPercentageToDP(100),
            borderRadius: 10,
          }}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/medicine-concept-doctor-patient-flat-style-isolated-white-background-practitioner-woman-young-man-hospital-78671218.jpg',
          }}
          resizeMode="cover"
        />
        <View
          style={{flexDirection: 'row', marginTop: widthPercentageToDP(-15)}}>
          <TouchableOpacity
            onPress={() => {
              setIsUser(true);
            }}
            style={{padding: 5}}>
            <FIcons
              name="person"
              style={{color: isUser ? css.brandPrimary : '#aaaaaa'}}
              size={widthPercentageToDP(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsUser(false);
            }}
            style={{padding: 5}}>
            <FIcons
              name="doctor"
              style={{color: !isUser ? css.brandPrimary : '#aaaaaa'}}
              size={widthPercentageToDP(10)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: widthPercentageToDP(300),
          borderRadius: widthPercentageToDP(5),
          backgroundColor: '#fff',
          width: widthPercentageToDP(100),
          alignItems: 'center',
        }}>
        <View
          style={{
            marginTop: widthPercentageToDP(0),
            width: widthPercentageToDP(95),
          }}>
          <View style={{marginTop: 10}}>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: '#aaaaaa',
                backgroundColor: '#fff',
                marginTop: widthPercentageToDP(5),
                paddingLeft: 5,
                width: widthPercentageToDP(95),
              }}>
              <AIcons name="key" color="#aaaaaa" size={25} />
              <TextInput
                placeholder="OTP"
                value=""
                style={styles.textInput}
              />
            </View>

            <View
              style={{
                borderBottomWidth: 0.5,
                backgroundColor: '#fff',
                flexDirection: 'row',
                borderRadius: 5,
                borderColor: '#aaaaaa',
                paddingLeft: 5,
                marginTop: widthPercentageToDP(5),
                alignItems: 'center',
                width: widthPercentageToDP(95),
              }}>
              <IOcons name="key-outline" color="#aaaaaa" size={25} />
              <TextInput
                placeholder="Password"
                value=""
                style={styles.textInput}
              />
            </View>

            <View
              style={{
                borderBottomWidth: 0.5,
                backgroundColor: '#fff',
                flexDirection: 'row',
                borderRadius: 5,
                borderColor: '#aaaaaa',
                paddingLeft: 5,
                marginTop: widthPercentageToDP(5),
                alignItems: 'center',
                width: widthPercentageToDP(95),
              }}>
              <IOcons name="key-outline" color="#aaaaaa" size={25} />
              <TextInput
                placeholder="Confirm Password"
                value=""
                style={styles.textInput}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={[styles.loginButton, css.brandBG]}>
                <TextComp
                  style={{fontSize: widthPercentageToDP(5), color: '#fff'}}>
                  Reset my password
                </TextComp>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Sign In')}
                style={[styles.registerButton]}>
                <TextComp
                  style={{
                    fontSize: widthPercentageToDP(5),
                    color: css.brandPrimary,
                  }}>
                  Goto login
                </TextComp>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/*<Text>{_id}</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    paddingTop: 0,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: 'white',
    shadowColor: 'rgba(0,0,0, .0)', // IOS
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: '#AAAAAA',
    borderWidth: 0.4,
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
  view: {
    color: '#fff',
    borderRadius: 3,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    padding: 2,
  },
  loginButton: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#aaaaaa',
    paddingLeft: 5,
    marginTop: 20,
    alignItems: 'center',
    width: widthPercentageToDP(95),
    padding: 10,
  },
  registerButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#aaaaaa',
    paddingLeft: 5,
    marginTop: 20,
    alignItems: 'center',
    width: widthPercentageToDP(95),
    padding: 10,
  },
});

export default ResetOTP;
