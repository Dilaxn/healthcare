import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Image, Text, Button} from 'react-native';
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

const AppointmentDate = props => {
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
      {/*<TextComp style={[styles.homeTitles]}>Consultation Schedule</TextComp>*/}
      <View style={{alignItems: 'center'}}>
        <View style={styles.container}>
          <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
            <View style={{flex: 1, height: '100%'}} />
            {/*<Icon name={service} color="#5ba2f4" size={80} />*/}
            <View style={{flex: 10, height: '100%'}}>
              <View
                style={{flex: 1, flexWrap: 'wrap', flexDirection: 'column'}}>
                <View style={{flex: 1, width: '100%'}} />
                <View style={{flex: 3, Height: '100%'}}>
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
                <View style={{flex: 3, Height: '100%', alignItems: 'flex-end'}}>
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
        </View>
        {/*<Text>{_id}</Text>*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: width / 3 - 45,
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

export default AppointmentDate;
