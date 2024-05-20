import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      input: {
        width: '100%',
        height: 40,
        borderColor: 'lightgreen',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
      },
      buttonPrimary: {
        backgroundColor: 'green',
        width:200,
        color:'green'
      },
      buttonSecondary: {
        backgroundColor:'white',
        borderBlockColor:'lightGreen',
        width:200,
        color: 'lightgreen'
      },
      title:{
        fontSize: 16,
        fontWeight:"bold"
      },
      header:{
        padding:10,
        margin: 15,
        alignItems: 'center'
      }
});

export default style;