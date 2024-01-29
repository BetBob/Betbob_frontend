import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "purple",
        height: 110,
        flexDirection: "row",
    },
    section: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});

// OLD SECTION
// section: {
//     flex: 1,
//     backgroundColor: "yellow",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRightWidth: 2,
//     borderRightColor: "black",
//     borderRadius: 10,
// },
