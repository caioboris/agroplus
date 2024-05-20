import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import api from '../api';

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
    <View>
      <Text>Esqueci minha senha</Text>
      <TextInput placeholder="Email" />
      <Button title="Recuperar Senha" onPress={() => {
        let user = {
          email: userEmail
        };
        forgetPassRequest(user);
      }} />
      <Button title="Voltar para Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default ForgotPassword;