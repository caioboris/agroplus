import { View, Text, Image, TouchableOpacity } from 'react-native';
import style from '../style'

const FrontPage = ({navigation}) =>{
   
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.title}> AgroPlus</Text>
                <Image source={require('../assets/background.jpg')} style={{opacity: 0.6, width: 300, borderRadius:4, marginTop:5}}/> 
            </View>
            <Text style={style.textDefault}>Criando uma nova experiência de vendas para empresas que alimentam o agro</Text>
            <View style={{display:'flex', alignContent: 'space-between', height:200}}>
                <TouchableOpacity style={style.buttonPrimary} onPress={()=> navigation.navigate('Register')}>
                    <Text>Cadastre-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonSecondary} onPress={()=> navigation.navigate('Login')}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonSecondary} onPress={()=> navigation.navigate('SalesHistory')}>
                    <Text>Historico de Vendas</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FrontPage;