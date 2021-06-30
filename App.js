import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { View } from 'react-native';

const App = () =>{
  return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Login />
      </View>
  )
}

export default App;