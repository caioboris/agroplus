import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      input: {
        width: 400,
        height: 40,
        borderColor: 'lightgreen',
        borderWidth: 1, 
        borderRadius:3,
        marginBottom: 12,
        paddingLeft: 8,
      },
      item: {
        padding: 15,
        marginVertical: 8,
        borderColor: 'lightgreen',
        borderWidth: 1,
        borderRadius: 5,
      },
      buttonPrimary: {
        backgroundColor: 'lightgreen',
        width:200,
        marginTop:10,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        height:30,
        color:'green'
      },
      buttonSecondary: {
        backgroundColor:'white',
        borderWidth:1,
        marginTop:5,
        borderColor:'lightgreen',
        width:200,
        height:30,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        color: 'lightgreen'
      },
      title:{
        fontSize: 36,
        fontWeight:"bold"
      },
      header:{
        padding:10,
        margin: 15,
        alignItems: 'center'
      },
      textDefault:{
        fontSize: 16
      },
      textButton:{
        alignSelf:"center"
      },
      list:{
        width:460,
        margin:10
      }
});

export default style;