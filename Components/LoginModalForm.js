import React, { useEffect, useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput, Button, BackHandler, Image } from "react-native";
import { rMS, rV, rS } from "./Utils/Responsive";
import { useNavigation } from "@react-navigation/native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Theme } from "../GlobalStyles/Theme";
import {GlobalStyles} from '../GlobalStyles/GlobalStyles'


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
        <View style={styles.mainContainer1}>
        <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/images/mainPic.gif')} 
                    style={styles.imageStyle} 
                />
            </View>
        </View>
        <View style={styles.mainContainer2}>
            <View style={{width: '100%', justifyContent: 'center',}}>
                <Text style={Theme.mainTitle}>Welcome! Glad to see you</Text>
                <View>
                    <View style={styles.textInputContainer}>
                        <TextInput style={[ styles.input,Theme.h3, {color: 'white'}]}  placeholderTextColor='white' keyboardType="number-pad" placeholder="Enter Your Number" />
                    </View>
                        <View>
                            <TouchableOpacity style={styles.button} onPress={handleClickBack}>
                                <Text style={[Theme.title, { color:'#5792a4'}]}>Get OTP</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>

        </View>
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
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingVertical:1,
        borderRadius: 12,
        marginBottom: 3,
        paddingHorizontal: 10,
        width: '100%',
      },
      input: {
        flex: 1,
        paddingVertical: 10
      },
    mainContainer1: {
        flex: 4.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 55,
        borderTopRightRadius: 45,
       
    },
    imageContainer: {
        width: '90%',
        aspectRatio: 1, 
       
        borderRadius: 20,
        overflow: 'hidden',
    },
    fieldsContainer: {
        marginVertical: verticalScale(20)
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
        
    },
    mainContainer2:{
        flex:2,
        backgroundColor: '#5792a4',
        paddingHorizontal: 24,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 55,
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
        borderRadius:12,
        paddingVertical : moderateScale(12),
        paddingHorizontal : moderateScale(8),
        width: scale(280),
        fontSize: moderateScale(12),
        color:'#ffffff'
    },
   
    button : {
        backgroundColor:'#ffffff',
        paddingVertical: moderateScale(12),
        borderRadius:12,
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
