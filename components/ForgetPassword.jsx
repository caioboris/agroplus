import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import api from '../api';
import style from '../style';

const ForgotPassword = ({ navigation }) => {
  const [userEmail, setEmail] = useState("");

  const forgetPassRequest = (user)=>{
    api.post('/forgetMyPass', user)
      .then((response)=>{
        if(response.status == 200){
          alert(`E-mail com instruções para a recuperação de senha enviado para:${user.email} `);
          navigation.navigate('Login')    
        }
      })
  }
  
  return (
    <View style={style.container}> 
      <Text style={style.title}>Esqueci minha senha</Text>
      <TextInput style={style.input} placeholder="Email" value={userEmail} onChangeText={setEmail} />
      <View style={{display:'flex', alignContent: 'space-between', height:200}}>
        <TouchableOpacity style={style.buttonPrimary} onPress={() => {
          let user = {
            email: userEmail
          };
          forgetPassRequest(user);
        }}>
          <Text style={style.textButton}>Recuperar senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonSecondary} onPress={() => navigation.navigate('Login')}>
          <Text style={style.textButton}>Voltar para Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;