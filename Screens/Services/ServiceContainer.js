import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import ServiceList from './ServiceList';
let data = require('../../assets/data/services.json');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextComp from '../../Components/TextComp';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ServiceContainer = props => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(data);
  }, []);
  return (
    <View>
      {/*<ProfileCard/>*/}
      {services.length > 0 ? (
        <View>
          <TextComp styles={[styles.homeTitles]}>Services</TextComp>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {services.map(item => {
              return (
                <ServiceList
                  // style={[css.flexWrapW, css.flexDR, css.centeredView]}
                  navigation={props.navigation}
                  key={item._id}
                  item={item}
                />
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text>No products found</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
    paddingBottom: 0,
  },
  pressed: {opacity: 0.5},
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
  imageContainer: {
    width: '50%',
    height: 120,
    marginBottom: 10,
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  serviceTitle: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    color: '#fff',
    fontSize: wp('3.9%'),
    fontFamily: 'PoppinsEB',
    textTransform: 'uppercase',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(61, 61, 61, 0.48)',
    borderRadius: 10,
    width: '95%',
  },
});

export default ServiceContainer;
