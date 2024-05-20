import { View, Text, Image, Button } from 'react-native';
import style from '../style'

const FrontPage = ({navigation}) =>{
   
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={require('../assets/background.jpg')} style={{opacity: 0.6, width: 300}}/> 
                <Text style={style.title}> AgroPlus</Text>
            </View>
            <Text>Criando uma nova experiência de vendas para empresas que alimentam o agro</Text>
            <Button color="#90ee90" title="Cadastre-se" onPress={()=> navigation.navigate('Register')}/>
            <Button color="#90ee90" title="Login" onPress={()=> navigation.navigate('Login')}/>
        </View>
    )
}

export default FrontPage;