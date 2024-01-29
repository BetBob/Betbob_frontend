import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./GroupScreenStyles";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import betbobopenmouthNoBack from "../../assets/betbobopenmouthNoBack.png";
import BetBobSorry from "../../assets/BetBobSorry.png";
import BetBobSorryTwo from "../../assets/BetBobSorryTwo.png";

export default function GroupScreen({ navigation }) {
    const handleLogoClick = () => {
        navigation.navigate("Home");
    };
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Welcome to all the active groups
            </Text>
            <Text style={styles.text}>
                Sorry, there are no active groups at this time.
            </Text>
            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={handleLogoClick}>
                    <Image style={styles.logo} source={betbobopenmouthNoBack} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogoClick}>
                    <Image style={styles.logo} source={BetBobSorry} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogoClick}>
                    <Image style={styles.logo} source={BetBobSorryTwo} />
                </TouchableOpacity>
            </View>
            <Footer />
        </View>
    );
}
