import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Homescreen/HomeScreen";
import LoginScreen from "./screens/Loginscreen/LoginScreen";
import RegisterScreen from "./screens/Registerscreen/RegisterScreen";
import FAQScreen from "./screens/FAQscreen/FAQScreen";
import UserScreen from "./screens/Userscreen/UserScreen";
import GroupScreen from "./screens/Groupscreen/GroupScreen";

import React from "react";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FAQScreen"
                    component={FAQScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="UserScreen"
                    component={UserScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="GroupScreen"
                    component={GroupScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
