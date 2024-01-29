import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#800080",
    },
    logoContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        color: "orange",
        marginTop: 50,
    },
    text: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
        color: "orange",
        fontStyle: "italic",
    },
    logo: {
        width: 200,
        height: 200,
    },
});
