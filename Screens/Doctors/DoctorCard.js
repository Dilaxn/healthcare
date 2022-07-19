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

const DoctorCard = props => {
  const {_id, name, service, pic} = props;

  const [show, setShow] = useState(false);
  const showAlert = () => {
    setShow(true);
  };

  const hideAlert = () => {
    setShow(false);
  };
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.container}>
        <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
          {/*<Icon name={service} color="#5ba2f4" size={80} />*/}
          <View style={{flex: 4, height: '100%'}}>
            <Image
              style={{height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10,}}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/doctor-piles-hospital-22148150.jpg',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={{flex: 1, width: '100%'}} />
          <View style={{flex: 11}}>
            <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'column'}}>
              <View style={{flex: 1}} />
              <View style={{flex: 2}}>
                <TextComp style={{fontWeight: 'bold', fontSize: 17}}>
                  {name}
                </TextComp>
              </View>
              <View style={{flex: 2}}>
                <TextComp style={{fontSize: 15}}>{service}</TextComp>
              </View>
              <View style={{flex: 1}} />
              <View style={{flex: 2}}>
                <View
                  style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <View style={{flex: 4}}>
                    <TextComp>{service}</TextComp>
                  </View>
                  <View style={{flex: 4, flexDirection: 'row-reverse'}}>
                    <TextComp>{service}</TextComp>
                  </View>
                  <View style={{flex: 1}} />
                </View>
              </View>
              <View style={{flex: 1}} />
            </View>
          </View>
        </View>
      </View>
      {/*<Text>{_id}</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: width / 3 - 25,
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
});

export default DoctorCard;
