import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainStack from './mainStack';
import ScreenGeneral from '../screens/screenGeneral';
import ScreenInicio from '../screens/screenInicio';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="MainStack" 
      screenOptions={ { headerShown: false, swipeEdgeWidth: 0, } }
      gestureEnabled='false'
      >
      <Drawer.Screen name="MainStack" component={MainStack} options={{ drawerItemStyle: { height: 0 }}} />
      <Drawer.Screen name="Principal" component={ScreenGeneral} />
      <Drawer.Screen name="Cerrar Sesión" component={ScreenInicio} />
    </Drawer.Navigator>    
  );
}

export default DrawerStack;