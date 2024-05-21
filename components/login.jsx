import React, { useState }  from "react";     
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import api from "../api";
import style from "../style";


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
        <View style={style.container}>
            <Text style={style.title}>Login</Text>
            <TextInput style={style.input} placeholder="Email" value={userEmail} onChangeText={setEmail}/>
            <TextInput style={style.input} placeholder="Senha" value={userPass} onChangeText={setPass} secureTextEntry/>
            <View style={{display:'flex',flexDirection:'row', margin:3, alignContent:'space-around'}}>
                <TouchableOpacity style={style.buttonPrimary} onPress={()=> navigation.navigate('Register')}>
                    <Text style={style.textButton}>Cadastre-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonPrimary} onPress={()=>{
                    let user = {
                        email: userEmail,
                        pass: userPass
                    };
                    loginRequest(user);
                }}>
                    <Text style={style.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.buttonSecondary} onPress={()=> navigation.navigate('ForgetPass')}>
                <Text style={style.textButton}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;