import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
let data = require('../../assets/data/doctors.json');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextComp from '../../Components/TextComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DoctorList from './DoctorList';

const MyDoctorContainer = props => {
  let {type} = props;
  const [doctors, setDoctors] = useState([]);
  let newData = data.filter(doc => {
    return doc.type === type || type === 'all';
  });
  console.log(newData, type);
  useEffect(() => {
    setDoctors(data);
  }, []);
  return (
    <View>
      {newData ? (
        <ScrollView>
          {newData.length > 0 ? (
            <View style={{marginBottom: 40}}>
              <TextComp styles={[styles.homeTitles]}>DOCTORS</TextComp>
              <ScrollView vertical={true} showsVerticalScrollIndicator={true}>
                {newData.map(item => {
                  return (
                    <DoctorList
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
              <Text>No Doctors found</Text>
            </View>
          )}
        </ScrollView>
      ) : null}
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

export default MyDoctorContainer;
