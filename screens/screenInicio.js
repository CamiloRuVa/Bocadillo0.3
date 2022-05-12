import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/sInicioStyles';

const ScreenInicio = ( {navigation} ) =>{
  return (
      
    <View style={styles.mainContainer}>
      <View style={styles.backContainer}>
        <Text style={styles.titulo}>Iniciar Sesión</Text>        
        
        <Text style={styles.subtitulo}>Correo Electronico</Text>
        <View style={styles.container}>
          <TextInput style={styles.Input} placeholder='Correo Electronico'/>
          <Icon name="user" size={30} color="#999" /> 
        </View>

        <Text style={styles.subtitulo}>Contraseña</Text>
        <View style={styles.container}>
          <TextInput style={styles.Input} secureTextEntry={true} placeholder='Contraseña'/>
          <Icon name="key" size={30} color="#999" /> 
        </View>

        
        <TouchableOpacity
          style = { styles.button }
          onPress = { () => { navigation.navigate('General') }}>            
          <Text style={ styles.buttonText } >Iniciar Sesión</Text>
        </TouchableOpacity>

        <Text style={styles.textoSecundario}>¿No tienes cuenta? <Text style={{color: '#cb0519'}} onPress = { () => { navigation.navigate('Registro') }}>Registrate Aquí</Text></Text>
      </View>
      
    </View>
  );
}


export default ScreenInicio;
