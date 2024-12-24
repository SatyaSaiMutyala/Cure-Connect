import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

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
        width: scale(330),
        height: verticalScale(400),
    },
    imageTwo: {
        width: scale(330),
        height: verticalScale(500),
    },
    imageThree: {
        width: scale(320),
        height: verticalScale(460),
    },
    dot: {
        backgroundColor: "rgba(0,0,0,.2)",
        width: scale(8),
        height: verticalScale(8),
        borderRadius: 5,
        margin: moderateScale(5),
    },
    activeDot: {
        backgroundColor: "#fff",
        width: scale(10),
        height: verticalScale(10),
        borderRadius: 6,
        margin: moderateScale(5),
    },
    button: {
        position: 'absolute',
        bottom: verticalScale(10),
        right: scale(20),
        paddingVertical: verticalScale(5),
        paddingHorizontal: scale(20),
    },
    buttonText: {
        fontSize: scale(25),
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
        padding: scale(20),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closeButton: {
        marginTop: verticalScale(20),
        backgroundColor: '#5792a4',
        padding: scale(10),
        borderRadius: 5,
    },
});

export default LoginScreen;
