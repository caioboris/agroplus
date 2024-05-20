import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontPage from './components/FrontPage';
import Register from './components/Register';
import SalesHistory from './components/SalesHistory';
import Login from './components/login';
import ForgetPassword from './components/ForgetPassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FrontPage'>
        <Stack.Screen name='FrontPage' component={FrontPage}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='ForgetPass' component={ForgetPassword}/>
        <Stack.Screen name='SalesHistory' component={SalesHistory}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
