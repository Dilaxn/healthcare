import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
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
import ReviewCard from "../../Components/DoctorScreenComponents/ReviewCard";

const DoctorScreen = props => {
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
      <ScrollView>
        {/*<TextComp style={[styles.homeTitles]}>Doctor Details</TextComp>*/}
        <View style={{alignItems: 'center'}}>
          <View style={styles.container}>
            <View
              style={{
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                padding: 0,
              }}>
              <View
                style={{
                  flex: 1,
                  height: '100%',
                  width: '100%',
                }}>
                <Image
                  style={{
                    height: '100%',
                    borderRadius: 10,
                  }}
                  source={{
                    uri: 'https://thumbs.dreamstime.com/b/doctor-piles-hospital-22148150.jpg',
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={{flex: 2}}>
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
                    <View
                      style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                      <View style={{flex: 1, width: '100%', height: '100%'}} />

                      <View style={{flex: 1, Height: '100%'}} />
                      <View
                        style={{
                          flex: 30,
                          Height: '100%',
                          marginTop: width / 30,
                        }}>
                        <TextComp style={{fontWeight: 'bold', fontSize: 16}}>
                          Dilakshan M.
                        </TextComp>
                        <TextComp>Cardiology</TextComp>
                      </View>
                    </View>
                  </View>
                  <View style={{flex: 1, height: '100%'}} />
                  {/*<View style={{flex: 1, height: '100%', alignItems: 'center'}}>*/}
                  {/*  <View*/}
                  {/*    style={{*/}
                  {/*      height: 0.5,*/}
                  {/*      backgroundColor: '#aaaaaa',*/}
                  {/*      width: '90%',*/}
                  {/*    }}*/}
                  {/*  />*/}
                  {/*</View>*/}

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
                          width: '100%',
                          padding: 5,
                          borderColor:"#aaaaaa",
                          borderWidth:0.25
                        }}>
                        <Image
                          style={{
                            height: '100%',
                            width: '100%',
                            backgroundColor:"#fff",

                          }}
                          source={require('../../assets/images/star.png')}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={{flex: 1, Height: '100%'}} />
                      <View style={{flex: 30, Height: '100%'}}>
                        <TextComp style={{opacity: 0.7}}>Rating</TextComp>
                        <TextComp>5.0</TextComp>
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
                          width: '100%',
                          padding: 5,
                          borderColor:"#aaaaaa",
                          borderWidth:0.25
                        }}>
                        <Image
                          style={{
                            height: '100%',
                            width: '100%',
                            backgroundColor:"#fff",

                          }}
                          source={require('../../assets/images/brief.png')}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={{flex: 1, Height: '100%'}} />
                      <View style={{flex: 30, Height: '100%'}}>
                        <TextComp style={{opacity: 0.7}}>Experience</TextComp>
                        <TextComp>2 years</TextComp>
                      </View>
                    </View>
                  </View>
                  <View style={{flex: 2, width: '100%'}} />
                </View>
              </View>
            </View>
          </View>
          {/*<Text>{_id}</Text>*/}
        </View>

        {/*profile*/}
        <TextComp style={[styles.homeTitles]}>Profile</TextComp>
        <View style={{alignItems: 'center'}}>
          <View style={styles.container2}>
            <TextComp style={{fontSize: 16}}>
              dr. Claire Lime, Sp.OG is a Gynecologist. He practices at RSIA
              Bina Medika Bintaro. The medical services that he can provide
              include : Consultation ...
            </TextComp>
          </View>
          {/*<Text>{_id}</Text>*/}
        </View>

        {/*profile*/}
        <TextComp style={[styles.homeTitles]}>Schedule</TextComp>
        <View style={{alignItems: 'center'}}>
          <View style={styles.container3}>
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
                  <View
                    style={{flex: 3, Height: '100%', alignItems: 'flex-end'}}>
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
        <View style={{alignItems: 'center'}}>
          <View style={[styles.container4]}>
            <TouchableOpacity style={[styles.button, css.brandBG]}
                              onPress={() => props.navigation.navigate('MakeAppointment')}
            >
              <TextComp style={{color: '#fff', marginTop: 10}}>
                Make Appointment
              </TextComp>
            </TouchableOpacity>
          </View>
        </View>

        {/*Reviews*/}
        <TextComp style={[styles.homeTitles]}>Reviews</TextComp>
        <View style={{alignItems: 'center'}}>
          <ReviewCard />
          <ReviewCard />
          {/*<Text>{_id}</Text>*/}
        </View>
      </ScrollView>
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
    shadowColor: 'rgba(0,0,0, .0)', // IOS
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  container2: {
    width: width - 20,
    paddingTop: 0,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .0)', // IOS
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  container3: {
    width: width - 20,
    height: 60,
    paddingTop: 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .0)', // IOS
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: '#aaaaaa',
    borderWidth: 0.5,
  },
  container4: {
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

export default DoctorScreen;
