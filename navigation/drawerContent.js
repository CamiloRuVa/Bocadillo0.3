import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import ScreenGeneral from '../screens/screenGeneral';
import ScreenInicio from '../screens/screenInicio';
import { NavigationContainer } from '@react-navigation/native';


export function DrawerContent(props){
    return(
      <View style={stylesDrawer.drawerContainer}>
          <DrawerContentScrollView style={stylesDrawer.midSection}>
            <DrawerItem                
                style={stylesDrawer.item}                
                icon={() => ( <Icon name="baguette" size={30} color={'white'} /> )}
                label={() => ( <Text style={stylesDrawer.label}> Menús </Text> )}
                onPress={() => {}}                
            />
            <DrawerItem
                style={stylesDrawer.item}         
                icon={() => ( <Icon name="cart-variant" size={30} color={'white'} /> )}       
                label={() => ( <Text style={stylesDrawer.label}> Mis Pedidos </Text> )}
                onPress={() => {}}                
            />
            <DrawerItem
                style={stylesDrawer.item}                
                icon={() => ( <Icon name="emoticon" size={30} color={'white'} /> )}
                label={() => ( <Text style={stylesDrawer.label}> Mi Perfil </Text> )}                    
            />
          </DrawerContentScrollView>
          <View style={stylesDrawer.bottomSection}>
            <DrawerItem                
                    style={stylesDrawer.item}                
                    icon={() => ( <Icon name="exit-to-app" size={30} color={'white'} /> )}
                    label={() => ( <Text style={stylesDrawer.label}> Cerrar Sesión </Text> )}
                    onPress={() => {props.navigation.navigate('Inicio')}}                                
                />
          </View>              
      </View>
    );
 }

const stylesDrawer = StyleSheet.create({
    drawerContainer:{
        flex:1,
        backgroundColor:'white'
    },
    midSection:{
        marginTop:'20%',
        borderTopColor: '#cb0519',        
        borderTopWidth: 2 
    },
    bottomSection:{
        marginBottom:10,
        paddingTop: 5,
        borderTopColor: '#cb0519',        
        borderTopWidth: 2                
    },
    item:{
        backgroundColor:'#cb0519',       
    },
    label:{
        color:'white', 
        fontWeight: 'bold',
    } 

});

/* <View>      
        <Drawer.Screen name="Principal" component={ScreenGeneral} />
        <Drawer.Screen style={stylesDrawer.signOut} name="Cerrar Sesión" component={ScreenInicio} />
      </View>  */