import React, { useRef, useState } from "react";
import { Animated, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./HomeScreenStyles";
import Footer from "../../Components/Footer/Footer";
import BetBob from "../../assets/BetBob.png";
import BetBobOpen from "../../assets/betbobopenmouthNoBack.png";

export default function HomeScreen({ navigation }) {
    const bounceValue = useRef(new Animated.Value(0)).current;
    const [isBouncing, setIsBouncing] = useState(false);

    const bounceAnimation = Animated.sequence([
        Animated.timing(bounceValue, {
            toValue: -30,
            duration: 500,
            useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }),
    ]);

    const handleLogoPress = () => {
        setIsBouncing(true);
        Animated.loop(bounceAnimation, { iterations: 3 }).start(() => {
            setIsBouncing(false);
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Welcome to BetBob!</Text>
            <TouchableOpacity onPress={handleLogoPress}>
                <Animated.Image
                    style={[
                        styles.logo,
                        { transform: [{ translateY: bounceValue }] },
                    ]}
                    source={isBouncing ? BetBobOpen : BetBob}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Register")}
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <Footer />
        </View>
    );
}
