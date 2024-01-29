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
    location: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "orange",
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "orange",
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
        padding: 10,
        textAlign: "center",
        color: "white",
    },
    button: {
        backgroundColor: "orange",
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
    birthdate: {
        fontSize: 14,
        textAlign: "center",
    },
    linkText: {
        paddingTop: 20,
        color: "orange",
        fontSize: 12,
        textAlign: "center",
        fontStyle: "italic",
    },
});
