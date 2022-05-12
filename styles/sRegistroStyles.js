import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer:{
      flex:1,
      flexDirection:'column',
      backgroundColor:'#CDCDCD'
    },
    backContainer:{
      backgroundColor:'white',
      margin: 10,
      padding: 20,
      borderColor:'black',
      borderWidth:2,
      borderRadius:10
    },
    container: {
      flexDirection:'row',
      borderColor: 'black',
      borderWidth: 1,
      height:40,
      marginBottom:20
    },
    mainBoton: {
      color:'#cb0519',
      width:1,
    },
    titulo:{
      fontSize:20,
      color:'black',
      fontWeight: 'bold',
      textAlign:'center',
      marginBottom:10
    },
    subtitulo:{
      fontSize:15,
      color:'black',
      padding:5
    },
    textoSecundario:{
      textAlign:'center',
      marginTop:10,
    },
    Input:{
      width:'85%'
    },
    icon:{
    } 
  });
  
export default styles;