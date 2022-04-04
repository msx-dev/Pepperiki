import React from "react";
import {View, Text, Image, ImageBackground} from "react-native";
import { TextInput, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.topbar}>
            </View>
            <LinearGradient colors={["rgba(245, 66, 78, 0.4)", "transparent"]} style={styles.gradient}>
                <View style={styles.contentContainer}>
                    <TextInput 
                    placeholder="Search peppers..."
                    placeholderTextColor={"#f5424e"}
                    style={styles.textInput}>

                    </TextInput>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    topbar: {
        height: "20%",
        backgroundColor: "#f5424e",
        borderBottomLeftRadius: 30,
    },
    gradient: {
        left: 0,
        right: 0, 
        height: 90,
        margin: -30
    },
    contentContainer: {
        backgroundColor: "white",
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 20,
    },
    textInput: {
        fontSize: 18,
        fontWeight: "bold",
        width: 260
    }
  })

export default Home;