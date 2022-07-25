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
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PatientInfo = props => {
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
      <TextComp style={[styles.homeTitles]}>Patient Information</TextComp>
      <View style={{alignItems: 'center'}}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
            }}>
            <View style={{flex: 1, width: '100%', height: '100%'}} />
            {/*<Icon name={service} color="#5ba2f4" size={80} />*/}
            <View style={{flex: 8, width: '100%', height: '100%'}}>
              <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                <View style={{flex: 1, width: '100%', height: '100%'}} />
                <View style={{flex: 8, Height: '100%'}}>
                  <Image
                    style={{
                      height: '100%',
                      borderRadius: 10,
                    }}
                    source={{
                      uri: 'https://thumbs.dreamstime.com/b/doctor-piles-hospital-22148150.jpg',
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 1, Height: '100%'}} />
                <View style={{flex: 30, Height: '100%', marginTop: width / 30}}>
                  <TextComp style={{fontWeight: 'bold', fontSize: 16}}>
                    Dilakshan M.
                  </TextComp>
                  <TextComp>Cardiology</TextComp>
                </View>
              </View>
            </View>
            <View style={{flex: 1, height: '100%'}} />
            <View style={{flex: 1, height: '100%', alignItems: 'center'}}>
              <View
                style={{height: 0.5, backgroundColor: '#AAAAAA', width: '90%'}}
              />
            </View>

            <View style={{flex: 5, width: '100%', height: '100%'}}>
              <View
                style={{
                  flex: 1,
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                }}>
                <View style={{flex: 1, width: '100%', height: '100%'}} />
                <View
                  style={{
                    flex: 8,
                    Height: '100%',
                    padding: 2,
                    alignItems: 'center',
                  }}>
                  <MIcons name="phone" size={35} />
                </View>
                <View style={{flex: 1, Height: '100%'}} />
                <View style={{flex: 30, Height: '100%'}}>
                  <TextComp style={{opacity: 0.7}}>Phone</TextComp>
                  <TextComp>+94-76464-2025</TextComp>
                </View>
              </View>
            </View>
            <View style={{flex: 1, height: '100%'}} />
            <View style={{flex: 5, width: '100%'}}>
              <View
                style={{
                  flex: 1,
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                }}>
                <View style={{flex: 1, width: '100%', height: '100%'}} />
                <View
                  style={{
                    flex: 8,
                    Height: '100%',
                    alignItems: 'center',
                    padding: 2,
                  }}>
                  <MIcons name="email-outline" size={35} />
                </View>
                <View style={{flex: 1, Height: '100%'}} />
                <View style={{flex: 30, Height: '100%'}}>
                  <TextComp style={{opacity: 0.7}}>Phone</TextComp>
                  <TextComp>+94-76464-2025</TextComp>
                </View>
              </View>
            </View>
            <View style={{flex: 2, width: '100%'}} />
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
    height: width / 2,
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
});

export default PatientInfo;
