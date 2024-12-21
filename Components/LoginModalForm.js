import React, { useEffect, useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput, Button, BackHandler } from "react-native";
import { rMS, rV, rS } from "./Utils/Responsive";
import { useNavigation } from "@react-navigation/native";

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
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOpen}
            >
                <View style={styles.overlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={handleClickBack} style={styles.titleView}>
                            <Text style={styles.title}>Welcom! Glad to see you</Text>
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
        </View>
    );
};

const styles = StyleSheet.create({
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
        padding: 20,
        alignItems: 'center',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    },
    titleView : {
        marginVertical : rMS(25)
    },
    title : {
        fontSize : rMS(28),
        color: 'white',
        fontFamily:'Lato',
        fontWeight:'bold'
    },
    textField : {
        borderWidth:2,
        borderColor:'#ffffff',
        borderRadius:10,
        paddingVertical : rMS(10),
        paddingHorizontal : rMS(10),
        width: rS(250),
        fontSize: rMS(18),
        color:'#ffffff'
    },
    fieldsContainer : {
        flexDirection:'column'
    },
    button : {
        backgroundColor:'#ffffff',
        paddingVertical: rMS(10),
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginVertical : rMS(30),
    },
    buttonText : {
        color:'#5792a4',
        fontWeight:'bold',
        fontSize:rMS(20),
    }
});

export default LoginModalForm;
