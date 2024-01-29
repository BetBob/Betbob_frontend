import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./FAQScreenStyles";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import BetBob from "../../assets/BetBob.png";

export default function FAQScreen({ navigation }) {
    const handleLogoClick = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Welcome to the Frequently Asked Questions
            </Text>
            <TouchableOpacity onPress={handleLogoClick}>
                <Image style={[styles.logo]} source={BetBob} />
            </TouchableOpacity>

            <Footer />
        </View>
    );
}
