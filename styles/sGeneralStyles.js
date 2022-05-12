import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
      flexDirection: 'row',
      backgroundColor: '#cb0519',
      justifyContent:'space-between',
      margin:15,
      borderRadius:10,
      maxHeight: 50
    },
    imgContainer:{
      borderColor: 'black',
      alignItems: 'center',
      padding: 0,
      marginTop: -10
    },
    img:{
      borderRadius: 50,
      borderWidth:5,
      borderColor: 'black',
      borderWidth: 3,
      width: 100,
      height: 100
    },
    iconos:{
      margin: 7,
    }
  });

export default styles;