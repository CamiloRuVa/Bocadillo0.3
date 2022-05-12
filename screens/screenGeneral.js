import React from 'react';
import { View, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/sGeneralStyles';

const ScreenGeneral = ( {navigation} ) => {
  return (
      
    <View>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress = { () => { navigation.openDrawer(); }} >
          <Icon style={styles.iconos} name="bars" size={30} color="white" />
        </TouchableOpacity> 
                
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={ require('../img/imgLogo.jpg') } />
        </View>

        <TouchableOpacity onPress = { ()=> {Alert.alert("Este no >:u")}}>          
          <Icon style={styles.iconos} name="search" size={30} color="white" />  
        </TouchableOpacity> 
      </View>
    </View>
  );
}


export default ScreenGeneral;
