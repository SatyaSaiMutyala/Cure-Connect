import React from "react";
import { createStaticNavigation } from "@react-navigation/native"
import BottomNavigation from "./BottomNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <>
        <Stack.Navigator screenOptions={{headerShown : false, headerStyle: { backgroundColor: '#6fa3d8' },}}>
            <Stack.Screen name='Mani' component={BottomNavigation}  />
        </Stack.Navigator>
        </>
    )
}

export default StackNavigation;