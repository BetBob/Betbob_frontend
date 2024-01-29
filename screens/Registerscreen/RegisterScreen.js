import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Animated,
} from "react-native";
import { styles } from "./RegisterScreenStyles";
import Footer from "../../Components/Footer/Footer";
import React, { useState } from "react";
import BetBob from "../../assets/BetBob.png";

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const handleRegister = () => {
        console.log({
            username: username,
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
        });

        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.location}
                onPress={() => navigation.navigate("Home")}
            >
                <Animated.Image
                    style={[styles.logo, { transform: [{ rotate: "15deg" }] }]}
                    source={BetBob}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>Register a user</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="white"
                value={firstname}
                onChangeText={setFirstname}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="white"
                value={lastname}
                onChangeText={setLastname}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="white"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="white"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="white"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.linkText}>
                    Already have a user? Click here to log in!
                </Text>
            </TouchableOpacity>
            <Footer />
        </View>
    );
}
