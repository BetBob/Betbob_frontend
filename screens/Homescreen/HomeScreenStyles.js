import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#800080",
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        color: "orange",
    },
    logo: {
        width: 200,
        height: 200,
    },
    button: {
        backgroundColor: "#FFD700",
        padding: 10,
        borderRadius: 5,
        margin: 10,
        width: 200,
        alignItems: "center",
    },
    buttonText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
    },
});
