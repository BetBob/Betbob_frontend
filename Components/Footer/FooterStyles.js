import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        left: 2,
        right: 2,
        bottom: 0,
        backgroundColor: "purple",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    section: {
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 2,
        borderRightColor: "black",
        borderRadius: 10,
    },
    text: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
    },
});
