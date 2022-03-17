import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Profile from "../screens/Profile";
import Favorite from "../screens/Favorite";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
        tabBarOptions={{style: {
            height: 65,
            justifyContent: "center",
            paddingVertical: 15,
            backgroundColor: "#eff4f4",
            elevation: 2,
        }}}>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size}) => (
                        <Image 
                            source={require("../images/chili.png")}
                            style={{height: 20, width: 20}}
                        />
                    )

                }}
            />
            <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size}) => (
                        <Image 
                            source={require("../images/chili.png")}
                            style={{height: 20, width: 20}}
                        />
                    )

                }}
            />
            <Tab.Screen 
                name="Detail"
                component={Detail}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size}) => (
                        <Image 
                            source={require("../images/chili.png")}
                            style={{height: 20, width: 20}}
                        />
                    )

                }}
            />

        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;