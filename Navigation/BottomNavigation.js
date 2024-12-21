import React, {useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import HomeScreen from "../Screens/HomeScreen";
import HistoryScreen from "../Screens/HistoryScreen";
import { Animated } from "react-native";

const BottomNavigation = () => {
    const BottomNavigation = createBottomTabNavigator();

    const TabBarIcon = ({ focused, color, size, IconComponent, iconName }) => {
        const scale = focused ? new Animated.Value(1.2) : new Animated.Value(1);

        useEffect(() => {
            Animated.spring(scale, {
                toValue: focused ? 1.3 : 1,
                friction: 4,
                useNativeDriver: true,
            }).start();
        }, [focused]);

        return (
            <Animated.View style={{ transform: [{ scale }] }}>
                <IconComponent name={iconName} color={color} size={size} />
            </Animated.View>
        );
    };

    return (
        <BottomNavigation.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#ffffff",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: { backgroundColor: "#5792a4" },
                headerStyle: { backgroundColor: '#5792a4' },
            }}
        >
            <BottomNavigation.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabBarIcon focused={focused} color={color} size={size} IconComponent={FontAwesome} iconName="home" />
                    ),
                }}
            />
            <BottomNavigation.Screen
                name='History'
                component={HistoryScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabBarIcon focused={focused} color={color} size={size} IconComponent={FontAwesome5} iconName="history" />
                    ),
                }}
            />
            <BottomNavigation.Screen
                name='Add'
                component={HistoryScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabBarIcon focused={focused} color={color} size={size} IconComponent={Ionicons} iconName="add-outline" />
                    ),
                }}
            />
            <BottomNavigation.Screen
                name='Reports'
                component={HistoryScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabBarIcon focused={focused} color={color} size={size} IconComponent={Ionicons} iconName="receipt-sharp" />
                    ),
                }}
            />
            <BottomNavigation.Screen
                name='Profile'
                component={HistoryScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <TabBarIcon focused={focused} color={color} size={size} IconComponent={Ionicons} iconName="person" />
                    ),
                }}
            />
        </BottomNavigation.Navigator>
    );
};

export default BottomNavigation;
