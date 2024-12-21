import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { rMS, rS, rV } from "../Components/Utils/Responsive";
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation = useNavigation();

    const handleOpenModal = () => {
        navigation.navigate('LoginModal')
    }

    return (
        <View style={styles.container}>
            <Swiper
                loop={false}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                onIndexChanged={(index) => setCurrentIndex(index)}
            >
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/images/LoginSwiper-1.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/images/LoginSwiper-2.jpg')}
                        style={styles.imageTwo}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/images/LoginSwiper-3.jpg')}
                        style={styles.imageThree}
                    />
                </View>
            </Swiper>

            {currentIndex === 2 && (
                <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
                    <FontAwesome6 name='arrow-right-long' style={styles.buttonText} />
                </TouchableOpacity>
            )}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5792a4',
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: rS(330),
        height: rV(400),
    },
    imageTwo: {
        width: rS(330),
        height: rV(500),
    },
    imageThree: {
        width: rS(320),
        height: rV(460),
    },
    dot: {
        backgroundColor: "rgba(0,0,0,.2)",
        width: rS(8),
        height: rV(8),
        borderRadius: 5,
        margin: rMS(5),
    },
    activeDot: {
        backgroundColor: "#fff",
        width: rS(10),
        height: rV(10),
        borderRadius: 6,
        margin: rMS(5),
    },
    button: {
        position: 'absolute',
        bottom: rV(10),
        right: rS(20),
        paddingVertical: rV(5),
        paddingHorizontal: rS(20),
    },
    buttonText: {
        fontSize: rS(25),
        color: '#ffffff',
        shadowOpacity: 0.34,
        elevation: 10,
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: rS(20),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closeButton: {
        marginTop: rV(20),
        backgroundColor: '#5792a4',
        padding: rS(10),
        borderRadius: 5,
    },
});

export default LoginScreen;
