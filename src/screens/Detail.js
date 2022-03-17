import React from "react";
import {View, Text} from "react-native";
import { StyleSheet } from "react-native";

const Detail = () => {
    return(
        <View style={styles.container}>
            <Text>Detail</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
  })

export default Detail;