import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import api from '../api';
import style from '../style';

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
    <View style={style.container}>
      <Text style={style.title}>Cadastro</Text>
      <TextInput style={style.input} placeholder="Email" value={userEmail} onChangeText={setEmail} />
      <TextInput style={style.input} placeholder="Senha" value={userPass} onChangeText={setPass} secureTextEntry />
      <TextInput style={style.input} placeholder="Confirme a Senha" value={userConfirmPass} onChangeText={setConfirmPass} secureTextEntry />
      <View style={{display:'flex', alignContent: 'space-between', height:200}}>
        <TouchableOpacity style={style.buttonPrimary} onPress={() => { 
          let user = {
            email: userEmail,
            pass: userPass,
            confirmPass: userConfirmPass
          };
          registerRequest(user);
        }}>
          <Text style={style.textButton}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonSecondary} onPress={() => navigation.navigate('Login')}>
          <Text>Voltar para Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
