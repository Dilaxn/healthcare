import React, {useState} from 'react';
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
import IIcons from 'react-native-vector-icons/Ionicons';
import DoctorInfo from './DoctorInfo';
import DoctorInfoAppointment from '../../Components/AppointmentScreenComponents/DoctorInfoAppointment';
import AppointmentContainer from './AppointmentContainer';
import AppointmentBookedDoctor from '../../Components/AppointmentScreenComponents/AppointmentBookedDoctor';

const AppointmentBookedScreen = props => {
  const {_id, name, service, pic} = props;

  const [show, setShow] = useState(false);
  const showAlert = () => {
    setShow(true);
  };

  const hideAlert = () => {
    setShow(false);
  };
  return (
    <View>
      {/*<TextComp style={[styles.homeTitles]}>Doctor Information</TextComp>*/}
      <View  style={{alignItems: 'center',flexDirection: 'column'}}>
        <View style={styles.container}>
          <MIcons name="checkbox-outline" size={wp('12%')} color="#0d53fc" />
          <TextComp
            style={{fontSize: wp('8%'), fontWeight: 'bold', color: '#000'}}>
            Appointment
          </TextComp>
          <TextComp
            style={{fontSize: wp('8%'), fontWeight: 'bold', color: '#000'}}>
            Booked
          </TextComp>
          <AppointmentBookedDoctor />
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Book Appointment')}
          style={[
            styles.button,
            css.brandBG,
            {
              width: wp('95%'),
              borderRadius: 3,
              margin: 40,
              alignItems: 'center',
              marginTop: wp(50),
            },
          ]}>
          <TextComp style={{color: '#fff', margin: 10}}>OK</TextComp>
        </TouchableOpacity>

        {/*<Text>{_id}</Text>*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    paddingTop: 0,
    borderRadius: 10,
    marginTop: wp('30%'),
    marginBottom: 5,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: '#AAAAAA',

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
    fontSize: wp('4%'),
    marginBottom: 5,
    marginTop: 7,
    marginLeft: 10,
    fontWeight: 'bold',
    fontFamily: 'PoppinsSB',
    color: '#0f0f0f',
  },
});

export default AppointmentBookedScreen;
