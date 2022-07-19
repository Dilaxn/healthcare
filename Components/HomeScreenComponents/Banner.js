import React from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {useNavigation} from '@react-navigation/native';
import css from '../../theme/CommonCSS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextComp from '../TextComp';

const bannerData = [
  {
    id: 1,
    image: require('./b1.jpeg'),
    newLaunch: false,
    bookNow: true,
    text1: 'At your service, on-demand!',
    text2: `Making home services experts simple, reliable 
    and affordable.`,
  },
  {
    id: 2,
    image: require('./b2.jpeg'),
    newLaunch: true,
    bookNow: true,
    text1: 'Were now LIVE in AbuDhabi.',
    text2: 'Get AED 25 OFF on first self service. HGSELF25',
  },
  {
    id: 3,
    image: require('./b3.jpeg'),
    newLaunch: true,
    bookNow: true,
    text1: 'Launching COVID19 services',
    text2: `Services you need in the safety and comfort 
of your home.`,
  },
];
export default function Banner() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={4}
        autoplayLoop
        autoplayLoopKeepAnimation
        showPagination
        paginationDefaultColor="#fff"
        paginationActiveColor="#2eb0e4"
        paginationStyle={{position: 'absolute', right: 30, bottom: -5}}
        paginationStyleItem={{width: 20, height: 3, marginHorizontal: 5}}
        data={bannerData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={[styles.bannerContainer]}>
            <Image
              style={[styles.bannerImage]}
              resizeMode="stretch"
              source={item.image}
            />
            <View style={[styles.bannerBox]}>
              <View style={[styles.content]}>
              </View>
              <View style={[styles.content]}>
                <View style={[styles.bannerText]}>
                  <TextComp
                    style={[styles.bannerText1, css.fbo, css.f10, css.whiteC]}>
                    {item.text1}
                  </TextComp>
                  <TextComp
                    style={[styles.bannerText2, css.fr, css.f10, css.whiteC]}>
                    {item.text2}
                  </TextComp>
                </View>
                {item.bookNow && (
                  <Pressable
                    android_ripple={{color: '#525252'}}
                    style={({pressed}) => [
                      styles.buttonContainer,
                      pressed && styles.pressed,
                    ]}
                    onPress={() => navigation.navigate('GetgenieCategories')}>
                    <TextComp color={css.whiteC} size={css.f12}>
                      BOOK NOW
                    </TextComp>
                  </Pressable>
                )}
              </View>
              {item.newLaunch && (
                <View style={[styles.newLaunch]}>
                  <TextComp size={css.f10}>NEW LAUNCHES</TextComp>
                </View>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerImage: {width: wp('100%'), height: hp('25%')},
  bannerBox: {
    position: 'absolute',
    bottom: 0,
    width: wp('100%'),
    height: 70,
    backgroundColor: '#00000050',
    padding: 10,
  },
  content: {flexDirection: 'row', justifyContent: 'space-between'},
  newLaunch: {
    backgroundColor: '#fff',
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    position: 'absolute',
    top: -10,
    left: 10,
  },
  buttonContainer: {
    height: 30,
    width: 110,
    backgroundColor: '#0d53fc',
    position: 'absolute',
    top: 0,
    right: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  bannerText1:{
    fontWeight:"bold"
  },

  pressed: {opacity: 0.5, borderRadius: 20},
});
