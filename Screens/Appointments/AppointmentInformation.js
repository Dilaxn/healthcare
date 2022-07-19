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
import DoctorInfo from './DoctorInfo';
import AppointmentDate from './AppointmentDate';
import PatientInfo from './PatientInfo';
import brandC from '../../theme/CommonCSS';

const AppointmentInformation = props => {
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
      <AppointmentDate />
      <DoctorInfo />
      <PatientInfo />
      <View style={{alignItems: 'center'}}>
        <View style={[styles.container]}>
          <TouchableOpacity style={[styles.button, css.brandBG]}>
            <TextComp style={{ color: '#fff',marginTop:10}}>
              Cancel Appointment
            </TextComp>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: '#fff',
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
  button: {
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderRadius: 5,
  },
});

export default AppointmentInformation;
