import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import styles from '../styles/sRegistroStyles';


const ScreenRegistro = ( {navigation} ) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] =  React.useState('')
  const [name,setName]= React.useState('');
  const [phone,setTelefono]=React.useState('');
  

  const ref = firestore().collection('Usuarios');
 
  async function addTodo() {
      await ref.add({
        nombre: name,
        correo: email,
        contrasena:password,
        telefono: phone
        });

      }
  return (
      
    <View style={styles.mainContainer}>
      <View style={styles.backContainer}>
        <Text style={styles.titulo}>Registrate</Text>        
        
        <Text style={styles.subtitulo}>Nombre</Text>
        <View style={styles.container}>
          <TextInput  onChangeText={(text) => setName(text)} style={styles.Input} placeholder='Nombre'/>
          <Icon name="vcard" size={30} color="#999" />  
        </View>

        <Text style={styles.subtitulo}>Correo</Text>
        <View style={styles.container}>
          <TextInput  onChangeText={(text) => setEmail(text)} style={styles.Input} placeholder='Correo'/>
          <Icon name="user" size={30} color="#999" /> 
        </View>

        <Text style={styles.subtitulo}>Contraseña</Text>
        <View style={styles.container}>
          <TextInput  onChangeText={(text) => setPassword(text)} style={styles.Input} secureTextEntry={true} placeholder='Contraseña'/>
          <Icon name="key" size={30} color="#999" /> 
        </View>

        <Text style={styles.subtitulo}>Repita la Contraseña</Text>
        <View style={styles.container}>
          <TextInput style={styles.Input} secureTextEntry={true} placeholder='Repetir Contraseña'/>
          <Icon name="key" size={30} color="#999" /> 
        </View>

        <Text style={styles.subtitulo}>Numero telefonico</Text>
          <View style={styles.container}>
            <TextInput   onChangeText={(text) => setTelefono(text)}  style={styles.Input} placeholder='Numero'/>
            <Icon name="phone" size={30} color="#999"  /> 
          </View>
     
        <Button 
        title='Crear Cuenta' style={styles.mainBoton} 
        onPress={() => addTodo()}
        color='#cb0519'/>

        <Text style={styles.textoSecundario}><Text style={{color: '#cb0519'}} onPress = { () => { navigation.navigate('Inicio') }}>Iniciar Sesión</Text></Text>
      </View>
      
    </View>
  );
}


export default ScreenRegistro;
