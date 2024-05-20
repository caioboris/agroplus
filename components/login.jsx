import React, { useState }  from "react";     
import { View, Text, TextInput, Button } from 'react-native';
import api from "../api";


const Login = ({navigation}) =>{
    const [userEmail, setEmail] = useState("");
    const [userPass, setPass] = useState("");

    const loginRequest = ({user}) =>{
        api.post('/login', user)
        .then((response)=>{
            if(response.status == 200){
                navigation.navigate('SalesHistory')
            }
        });
    };
    
    return(
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Email" value={userEmail} onChangeText={setEmail}/>
            <TextInput placeholder="Senha" value={userPass} onChangeText={setPass} secureTextEntry/>
            <Button title="Login" onPress={()=>{
                let user = {
                    email: userEmail,
                    pass: userPass
                };
                loginRequest(user);
            }}/>
            <Button title="Cadastre-se" onPress={()=> navigation.navigate('Register')}/>
            <Button title="Esqueci minha senha" onPress={()=> navigation.navigate('ForgetPass')}/>
        </View>
    )
}

export default Login;