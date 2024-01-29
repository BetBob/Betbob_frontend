import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./FooterStyles";

const Footer = () => {
    const navigation = useNavigation({ navigation });

    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.section}
                onPress={() => navigation.navigate("UserScreen")}
            >
                <Text style={styles.text}>Users</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.section}
                onPress={() => navigation.navigate("GroupScreen")}
            >
                <Text style={styles.text}>Groups</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.section}
                onPress={() => navigation.navigate("FAQScreen")}
            >
                <Text style={styles.text}>FAQ</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
