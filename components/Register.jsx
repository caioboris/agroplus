import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import api from '../api';

const Register = ({ navigation }) => {
  const [userEmail, setEmail] = useState("");
  const [userPass, setPass] = useState("");
  const [userConfirmPass, setConfirmPass] = useState("");

  const registerRequest = ({user})=>{

    if(user.confirmPass === user.pass){     
      api.post('/register', user)
        .then((response) =>{
        if(response == 200){
          alert("Usuário criado com sucesso.");
          navigation.navigate('Login');
        }
      });
    } else{
      alert("As senhas não coincidem");
    }
  }

  
  return (
    <View>
      <Text>Cadastro</Text>
      <TextInput placeholder="Email" value={userEmail} onChangeText={setEmail} />
      <TextInput placeholder="Senha" value={userPass} onChangeText={setPass} secureTextEntry />
      <TextInput placeholder="Confirme a Senha" value={userConfirmPass} onChangeText={setConfirmPass} secureTextEntry />
      <Button title="Cadastrar" onPress={() => { 
        let user = {
          email: userEmail,
          pass: userPass,
          confirmPass: userConfirmPass
        };

        registerRequest(user);
       }} />
      <Button title="Voltar para Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Register;
