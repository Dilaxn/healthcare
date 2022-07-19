import {
  View,
  StyleSheet,
  Platform,
  UIManager,
  Image,
  TextInput,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
var {width} = Dimensions.get('window');
import css from "../../theme/CommonCSS"
import {Container, Header, Item, Input} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchBar from 'react-native-platform-searchbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import TextComp from '../TextComp';
import brandBG from "../../theme/CommonCSS";
const ReviewCard = ({navigation}) => {
  const [searchVal, setSearchVal] = useState('');
  const searchService = text => {
    // setProductsFiltered(
    //     products.filter((i) => i.pro_title.toLowerCase().includes(text.toLowerCase()))
    // );
    console.log(text);
    setSearchVal(text);
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  });
  let cont =
    'dr. Claire Lime, Sp.OG is a Gynecologist. He practices at RSIA Bina' +
    'Medika Bintaro. The medical services that he can provide include' +
    'Consultation ...';

  return (
    <View style={{height: 100, marginBottom: 10}}>
      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          height: '100%',
          width: '100%',
        }}>
        <View style={{flex: 1, width: '100%', height: '100%'}} />
        <View style={{flex: 8, Height: '100%', width: '100%'}}>
          <Image
            style={{
              height: '100%',
              borderRadius: 10,
              width: '100%',
            }}
            source={{
              uri: 'https://thumbs.dreamstime.com/b/doctor-piles-hospital-22148150.jpg',
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{flex: 1, Height: '100%'}} />
        <View style={{flex: 30, Height: '100%', marginTop: 5}}>
          <TextComp style={{fontWeight: 'bold', fontSize: 16}}>
            Dilakshan M.
          </TextComp>
          <TextComp>
            {cont.length > 130 ? cont.substr(0, 130) + '...' : cont}
          </TextComp>
          <View style={[styles.rating,css.brandBG]}>
            <TextComp style={{color: '#fff'}}>4.2</TextComp>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    // ...css.boxShadow,
    zIndex: 10,
    marginBottom: -10,
  },
  searchBoxFull: {
    backgroundColor: '#fff',
    width: '90%',
    height: 40,
    padding: 0,
    borderRadius: 0,
    flexDirection: 'row',
  },
  searchIcon: {
    position: 'absolute',
    left: 25,
    paddingVertical: 5,
    color: '#0d53fc',
  },
  input: {
    width: '95%',
    zIndex: 999999999999999,
    elevation: 9999,
  },
  searchToolBarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
    height: 35,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  rating: {
    borderColor: '#aaaaaa',
    borderWidth: 0.25,
    width: '20%',
    alignItems: 'center',
    borderRadius: 5
  },
});

export default ReviewCard;
