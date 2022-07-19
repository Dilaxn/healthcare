import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, Image, Text, Button} from 'react-native';
var {width} = Dimensions.get('window');
import css from '../../theme/CommonCSS';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import TextComp from "../../Components/TextComp";
var urljoin = require('url-join');
const ServiceCard = props => {
  let {_id, title, service, pic} = props;
  let l = './services/brain.png';
  const [show, setShow] = useState(false);
  const [x, setX] = useState('./services/brain.png');
  const showAlert = () => {
    setShow(true);
  };
  const hideAlert = () => {
    setShow(false);
  };
  useEffect(() => {
    if (service === 'brain') {
      setX('./services/brain.png');
    }
    if (service === 'tooth') {
      setX('./services/tooth.png');
    }
    if (service === 'heart') {
      setX('./services/heart.png');
    }
    if (service === 'skin') {
      setX('./services/skin.png');
    }
    if (service === 'baby') {
      setX('./services/baby.png');
    }
    if (service === 'eye') {
      setX('./services/eye.png');
    }
    if (service === 'steroids') {
      setX('./services/steroids.png');
    }
  }, []);
  return (
    <View>
      <View style={styles.container}>
        {/*<Icon name={service} color="#5ba2f4" size={80} />*/}
        <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'column'}}>
          <View style={{flex: 4}}>
            {service ? (
              <Image
                style={{
                  marginTop: '5%',
                  height: '90%',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  resizeMode: 'contain',
                }}
                source={{uri: pic}}
              />
            ) : null}
          </View>
          <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
            <TextComp>{title}</TextComp>
          </View>
        </View>
      </View>
      {/*<Text>{_id}</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 3 - 25,
    height: width / 3 - 25,
    paddingTop: 0,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    // elevation: 8,
    borderColor: '#AAAAAA',
    borderWidth: 0.4,
    backgroundColor: 'white',
    // shadowColor: 'rgba(0,0,0, .4)', // IOS
    // shadowOffset: {height: 1, width: 1},
    // shadowOpacity: 1,
    // shadowRadius: 0.3,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
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

export default ServiceCard;
