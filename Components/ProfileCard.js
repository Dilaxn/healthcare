import {View, StyleSheet, Platform, UIManager, Text} from 'react-native';
import React, {useEffect} from 'react';
import css from '../theme/CommonCSS';
import SearchBar from 'react-native-dynamic-search-bar';
import TextComp from './TextComp';

const ProfileCard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    // backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // ...css.boxShadow,
    zIndex: 10,
    marginBottom: -10,
  },
  searchBoxFull: {
    backgroundColor: 'red',
    width: '90%',
    height: 40,
    padding: 0,
    borderRadius: 0,
    flexDirection: 'row',
  },
  container: {
    height:2000, width:200,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
    margin:200,
    backgroundColor:"red"
  },
  item: {
    width: '50%', // is 50% of container width
  },
});

export default ProfileCard;
