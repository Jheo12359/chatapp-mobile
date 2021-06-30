import React, { useState } from 'react';
import { View, Text, TextInput, Button, Label, Alert } from 'react-native';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register() {
        
        try {
            let item = {username, password};
            
            let result = await fetch("http://10.0.2.2:8000/api/register",{
                method: 'POST',
                body:JSON.stringify(item),
                headers:{
                    "Content-Type" : 'application/json',
                    "Accept" : 'application/json'
                }
            })
            result = await result.json();
            if(result){
                Alert.alert('Congratulations', 'you can login now');
            }
        } catch(e) {
            console.warn(e);
        }
    }

    return (
        <View>
            <Text>Register</Text>
            <TextInput 
                placeholder="Username"
                onChangeText={setUsername} 
            />
            <TextInput
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={setPassword}
            />
            <Button onPress={register} title="Submit"></Button>
        </View>
    )
}

export default Register
