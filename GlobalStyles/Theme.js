import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import colors from "../GlobalColors/GlobalColor";
import { moderateScale, verticalScale } from "react-native-size-matters";
export const fonts = () => {
    const [fontsLoaded] = useFonts({
        'Quicksand-Bold': require('../assets/Fonts/Quicksand-Bold.ttf'),
        'Quicksand-Medium': require('../assets/Fonts/Quicksand-Medium.ttf'),
        'Quicksand-Regular': require('../assets/Fonts/Quicksand-Regular.ttf'),
    });
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return fontsLoaded;
}
export const Theme = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    subText: {
        fontFamily: "Quicksand-Bold",
        color:colors.sortpannelbacgroundcolor,
        fontSize:14,  
    },
    subText2: {
        fontFamily: "Quicksand-Bold",
        color:colors.h1Textcolor,
        fontSize:14,  
    },
    members: {
        fontFamily: "Quicksand-Bold",
        color:colors.membersText,
        fontSize:14,
        marginVertical: 1
    },
    title: {
        fontFamily: "Quicksand-Bold",
        color:colors.h1Textcolor,
        fontSize:16,
        marginVertical: 1
    },
    amount: {
        fontFamily: "Quicksand-Bold",
        color:colors.sortpannelbacgroundcolor,
        fontSize:30
    },
    reciveAmount: {
        fontFamily: "Quicksand-Bold",
        color:colors.success,
        fontSize:30
    },
    payAmount: {
        fontFamily: "Quicksand-Bold",
        color:colors.danger,
        fontSize:30
    },
    h1:{
        fontFamily: "Quicksand-Bold",
        color:colors.h1Textcolor,
        fontSize:30,
    },
    h2:{
        fontFamily: "Quicksand-Regular",
        color:colors.h2Textcolor,
        fontSize:16,
    },
    h3:{
        fontFamily: 'Quicksand-Bold',
        color:colors.h3Textcolor,
        fontSize:20,
    },
    h4:{
        fontFamily:"Quicksand-Regular",
        color:colors.h4Textcolor,
        fontSize:14,
    },
    h5:{
        fontFamily:"Quicksand-Regular",
        color:colors.h5Textcolor,
        fontSize:16,
    },
    IconSize:{
        fontSize:22
    },
    errorTextstyle:{
        color: 'red',
        fontFamily:"Quicksand-Medium",
        fontSize:12,
        marginBottom: 3
    },
    ButtonTextStyle:{
        fontSize:22,
    },
    InputLabelText:{
        fontSize:16,
        fontWeight:"700",
        color: colors.TextfieldLabelcolor
    },
    LinkHelperText:{
        fontSize: 14,
        color: "black",
    },
    LinkText:{
        fontSize: 14,
        color: "#FF6B00",
    },
    Helpertext:{
        color: "black",
        fontSize: 16,
    },
    bottomtabbarfonts:{
        fontFamily:"sans-serif",
        fontSize:14,
    },
    DistBtMobEdgandcon:{
        marginHorizontal:16
    },
    offerPricecolor:{
        color:"black",
        fontSize:18
    },
    Discounttextcolor:{
        color:"#4AAD39",
        fontSize:16
    },
    Pricedropcolor:{
        color:"#95989A",
        fontSize:18,
        textDecorationLine:"line-through"
    },
    header: {
        color: '#240046',
        fontFamily: 'Quicksand-Bold',
        fontSize: 20

    },
    expText: {
            fontFamily:"Quicksand-Medium",
            color:colors.h1Textcolor,
            fontSize:16,   
    },
    dummyIcon: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: '#FFE9FF', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    dummyIconText: {
        color: '#240046',
        fontSize: 24,
        fontFamily: 'Quicksand-Bold',
        
    },
    InviteButtonText:{
        fontFamily:"Quicksand-Bold",
        color:colors.themeColor,
        fontSize:14,
    },
    iconText: {
        fontSize: 12,
        fontFamily: 'Quicksand-Medium',
        color: colors.h1Textcolor

    },
    subHeading: {
        fontFamily: "Quicksand-Bold",
        color:colors.h1Textcolor,
        fontSize:14,  
    },
    paraTextWithGrey: {
        fontFamily: "Quicksand-Medium",
        color:colors.greyColor,
        fontSize:14,  
    },
    mainTitle: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontFamily: "Quicksand-Bold",
        fontSize: moderateScale(20),
        marginBottom: verticalScale(12),
      
    }
  
});
 
 