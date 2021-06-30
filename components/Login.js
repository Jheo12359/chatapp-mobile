import React, { useState } from 'react';
import { View, Text, TextInput, Button, Label, Alert} from 'react-native';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        
        try {
            let item = {username, password};
            
            let result = await fetch("http://10.0.2.2:8000/api/login",{
                method: 'POST',
                body:JSON.stringify(item),
                headers:{
                    "Content-Type" : 'application/json',
                    "Accept" : 'application/json'
                }
            })
            result = await result.json();
            if(result.error){
                Alert.alert('Oops', result.error);
            } else {
                // redirect
            }
        } catch(e) {
            console.warn(e);
        }

    }
    return (
        
        <View>
            <Text>Login</Text>
            <TextInput 
                placeholder="Username"
                onChangeText={setUsername} 
            />
            <TextInput
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={setPassword}
            />
            <Button onPress={login} title="login"></Button>
        </View>
    )
}

export default Login
