import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Animated,
} from "react-native";
import Footer from "../../Components/Footer/Footer";
import { styles } from "./LoginScreenStyles";
import BetBob from "../../assets/BetBob.png";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log({ email, password });
        navigation.navigate("Home");
    };

    const handleLogoClick = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.location} onPress={handleLogoClick}>
                <Animated.Image
                    style={[styles.logo, { transform: [{ rotate: "-15deg" }] }]}
                    source={BetBob}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                placeholderTextColor="white"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.linkText}>
                    Don't have a user? Click here to register!
                </Text>
            </TouchableOpacity>
            <Footer />
        </View>
    );
}
