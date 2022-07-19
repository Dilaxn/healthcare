import {
  View,
  StyleSheet,
  Platform,
  UIManager,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import css from '../theme/CommonCSS';
import {Container, Header, Item, Input} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchBar from 'react-native-platform-searchbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HeaderHome = ({navigation}) => {
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
  return (
    <View style={[styles.header]}>
      <View style={[styles.searchToolBarWrapper]}>
        <Pressable
          style={[styles.input]}
          onPress={() => {
            console.log('captured on press');
            // navigation.navigate("Search");
          }}>
          <TextInput
            value={searchVal}
            editable={true}
            placeholder={'SEARCH FOR ANY SERVICE'}
            autoCorrect={false}
            autoCapitalize="none"
            style={{
              paddingLeft: 18,
              height: 35,
              // top: -3,
              left: 40,
              fontSize: wp('3%'),
              fontFamily: 'PoppinsM',
              color: '#000',
              backgroundColor: 'transparent',
            }}
            onChangeText={text => searchService(text)}
          />
          <EvilIcons
            style={[styles.searchIcon]}
            color="red"
            size={26}
            name="search"
          />
          {/*<Icon*/}
          {/*  style={[styles.searchIcon]}*/}
          {/*  type="FontAwesome"*/}
          {/*  name="search"*/}
          {/*  // color={color}*/}
          {/*  size={20}*/}
          {/*/>*/}
        </Pressable>
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
});

export default HeaderHome;
