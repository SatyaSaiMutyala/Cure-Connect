import React from "react";
import { createStaticNavigation } from "@react-navigation/native"
import BottomNavigation from "./BottomNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import LoginModalForm from "../Components/LoginModalForm";

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <>
        <Stack.Navigator screenOptions={{headerShown : false, headerStyle: { backgroundColor: '#6fa3d8' },}}>
            <Stack.Screen name="Login" component={LoginScreen}  />
            <Stack.Screen name='Main' component={BottomNavigation}  />
            <Stack.Screen name="LoginModal" component={LoginModalForm} />
        </Stack.Navigator>
        </>
    )
}

export default StackNavigation;