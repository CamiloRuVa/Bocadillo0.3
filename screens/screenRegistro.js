import React from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import styles from '../styles/sRegistroStyles';


const ScreenRegistro = ( {navigation} ) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [password2, setPassword2] = React.useState('')
  const [name,setName]= React.useState('');
  const [phone,setTelefono]=React.useState('');
  
  //const ref = firestore().collection("Usuarios");

  function validar(){
    if(name == '' || email=='' || password=='' || password2==''  || phone==''){      
      Alert.alert('Error','Te falta rellenar campos');
    }if(password != password2){
      Alert.alert('Error','Contraseñas no coinciden');
    }
    else{
      addTodo();
      Alert.alert('Hecho','La cuenta ha sido creado',
        [{text: "Aceptar", onPress: () => navigation.navigate('Inicio')}]);
    }
  }
  

  async function addTodo() {
    try{
      firestore().collection("Usuarios").add({
        nombre: name,
        correo: email,
        contrasena:password,
        telefono: phone
      })
    }
    catch(e){
      console.log(e)
    }
    
    
    /*await ref.add({
      nombre: name,
      correo: email,
      contrasena:password,
      telefono: phone
    });*/
  }


  return (
      
    <View style={styles.mainContainer}>
      <View style={styles.backContainer}>
        <Text style={styles.titulo}>Registrate</Text>        
        
        <Text style={styles.subtitulo}>Nombre</Text>
        <View style={styles.container}>
          <TextInput onChangeText={(text) => setName(text)} style={styles.Input} placeholder='Nombre'/>
          <Icon name="user" size={30} color="#999" />  
        </View>

        <Text style={styles.subtitulo}>Correo</Text>
        <View style={styles.container}>
          <TextInput keyboardType="email-address" onChangeText={(text) => setEmail(text)} style={styles.Input} placeholder='Correo'/>
          <IconMC name="email-multiple-outline" size={30} color="#999" /> 
        </View>

        <Text style={styles.subtitulo}>Contraseña</Text>
        <View style={styles.container}>
          <TextInput  onChangeText={(text) => setPassword(text)} style={styles.Input} secureTextEntry={true} placeholder='Contraseña'/>
          <IconMC name="lock-outline" size={30} color="#999" /> 
        </View>

        <Text style={styles.subtitulo}>Repita la Contraseña</Text>
        <View style={styles.container}>
          <TextInput onChangeText={(text) => setPassword2(text)} style={styles.Input} secureTextEntry={true} placeholder='Repetir Contraseña'/>
          <IconMC name="lock-outline" size={30} color="#999" /> 
        </View>

        <Text style={styles.subtitulo}>Numero telefonico</Text>
          <View style={styles.container}>
            <TextInput  keyboardType="numeric"  onChangeText={(text) => setTelefono(text)}  style={styles.Input} placeholder='Numero'/>
            <Icon name="phone" size={30} color="#999"  /> 
          </View>
     
        <Button 
        title='Crear Cuenta' style={styles.mainBoton} 
        onPress={() => addTodo()}
        color='#cb0519'/>

        <Text style={styles.textoSecundario}><Text style={{color: '#cb0519'}} onPress = { () => {navigation.navigate('Inicio')}}>Iniciar Sesión</Text></Text>
      </View>
      
    </View>
  );
}


export default ScreenRegistro;
