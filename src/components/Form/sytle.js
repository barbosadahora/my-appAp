import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    
    formContext: {
        width: "90%",
        height: "50%",
       // bottom:0,
        backgroundColor:"#ffffff",
        alignItems:"center",
        //marginTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },

    form:{
        width:"100%",
        height: "auto",
        marginTop: 20,
        padding: 10

    },

    formLabel:{
        color:"#993399",
        fontSize:30,
        paddingLeft: 20
    },

    input:{
        width:"90%",
        borderRadius:70,
        backgroundColor: "#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10
    },

    textButton:{
        fontSize: 20,
        color:"#ffffff"
    },

    button:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#993399",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30
    }


});

export default styles
