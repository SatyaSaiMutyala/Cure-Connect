import { StyleSheet, Text, View } from "react-native";
import AppBackground from "../Components/AppBackgroundColor";

const HomeScreen = () => {
    return(
        <View style={styles.container}>
        <View><Text>Hey This is Home Screeen</Text></View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#6fa3d8',
    }
})