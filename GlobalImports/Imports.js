
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView, FlatList, TextInput, Modal, Alert, Pressable, KeyboardAvoidingView, SectionList, ActivityIndicator} from "react-native";
const Import = {
    Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView, FlatList, TextInput, Modal, Alert,Pressable,KeyboardAvoidingView, SectionList,ActivityIndicator
}
export default Import;
import { useDispatch, useSelector } from "react-redux";

export const ReduxImport = {
    useDispatch,useSelector
}

import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
export const nativeImports = {
    useNavigation, useRoute, useFocusEffect
}
import React, {useState, useCallback, useEffect} from "react";
export const reactImports = {
    useCallback,React, useState, useEffect
}

import AsyncStorage from "@react-native-async-storage/async-storage";
export const asyncStorage  = {
    AsyncStorage
}