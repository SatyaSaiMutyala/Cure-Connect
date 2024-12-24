import React, { useEffect, useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput, Button, BackHandler } from "react-native";
import { rMS, rV, rS } from "./Utils/Responsive";
import { useNavigation } from "@react-navigation/native";
import { moderateScale, scale } from "react-native-size-matters";
import { Theme } from "../GlobalStyles/Theme";

const LoginModalForm = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if(modalOpen){
                setModalOpen(false);
                navigation.navigate('Login');
                return true
            }
            return false;
        })
        return () => backHandler.remove();
    }, [modalOpen, navigation])

    const handleClickBack = () => {
        setModalOpen(false);
        navigation.navigate('Main');
    }

    return (
        <>
        <View style={styles.mainContainer1}></View>
        <View style={styles.mainContainer2}></View>
        {/* <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOpen}
            >
                <View style={styles.overlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={handleClickBack} style={styles.titleView}>
                            <Text style={Theme.mainTitle}>Welcome! Glad to see you</Text>
                        </TouchableOpacity>
                        <View style={styles.fieldsContainer}>
                            <View>
                            <TextInput placeholder="Enter Phone Number" style={styles.textField} placeholderTextColor='white' selectionColor='#ffffff' />
                            </View>
                            <View>
                                <TouchableOpacity style={styles.button} onPress={handleClickBack}>
                                    <Text style={styles.buttonText}>Get OTP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View> */}
        </>
    );
};

const styles = StyleSheet.create({
    mainContainer1: {
        flex: 5.5,
    
       
    },
    mainContainer2:{
        flex:2,
      
        backgroundColor: '#5792a4',
        padding: 16,
        alignItems: 'center',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    },

    container: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',  
        // backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContent: {
        backgroundColor: '#5792a4',
        padding: 16,
        alignItems: 'center',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    },
    titleView : {
        marginVertical : moderateScale(20)
    },
    title : {
        fontSize : moderateScale(24),
        color: 'white',
        fontFamily:'Lato',
        fontWeight:'bold'
    },
    textField : {
        borderWidth:1,
        borderColor:'#ffffff',
        borderRadius:16,
        paddingVertical : moderateScale(8),
        paddingHorizontal : moderateScale(8),
        width: scale(280),
        fontSize: moderateScale(12),
        color:'#ffffff'
    },
   
    button : {
        backgroundColor:'#ffffff',
        paddingVertical: moderateScale(8),
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginVertical : moderateScale(16),
    },
    buttonText : {
        color:'#5792a4',
        fontWeight:'bold',
        fontSize:moderateScale(15),
    }
});

export default LoginModalForm;
