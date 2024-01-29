import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./FooterStyles";
import BobUsers from "../../assets/BobHeadUsersNB.png";
import BobGroups from "../../assets/BobHeadGroupsNB.png";
import BobFAQ from "../../assets/BobHeadFAQNB.png";
import BobHome from "../../assets/BobHeadHomeNB.png";

const Footer = () => {
    const navigation = useNavigation({ navigation });

    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.section}
                onPress={() => navigation.navigate("Home")}
            >
                <Image source={BobHome} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.section}
                onPress={() => navigation.navigate("UserScreen")}
            >
                <Image source={BobUsers} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.section}
                onPress={() => navigation.navigate("GroupScreen")}
            >
                <Image source={BobGroups} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.section}
                onPress={() => navigation.navigate("FAQScreen")}
            >
                <Image source={BobFAQ} style={styles.image} />
            </TouchableOpacity>
        </View>
    );
};

export default Footer;

// OLD

{
    /* <TouchableOpacity
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
            </TouchableOpacity> */
}
