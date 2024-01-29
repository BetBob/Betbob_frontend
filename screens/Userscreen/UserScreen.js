import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import BetBob from "../../assets/BetBob.png";
import BetBobOpen from "../../assets/betbobopenmouthNoBack.png";
import { styles } from "./UserScreenStyles";
import Footer from "../../Components/Footer/Footer";

/*
THIS WHOLE CODE SECTION IS BAD PRACTICE.
THIS IS JUST A PLACEHOLDER UNTIL WE CAN GET THE BACKEND WORKING.
YES I DO KNOW, NEVER FUCKING HARDCODE THAT SHIT
IT SHOULD LOAD DATABASE DATA AND LOOP OVER IT, lol
*/

export default function UserScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.logoTouchable}
                onPress={() => navigation.navigate("Home")}
            >
                <Image source={BetBob} style={styles.logo} />
            </TouchableOpacity>
            <View style={styles.headerRow}>
                <Text style={styles.headerCell}>ID</Text>
                <Text style={styles.headerCell}>First Name</Text>
                <Text style={styles.headerCell}>Last Name</Text>
                <Text style={styles.headerCell}>Username</Text>
                <Text style={styles.headerCell}>Email</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>1</Text>
                <Text style={styles.tableCell}>Jane</Text>
                <Text style={styles.tableCell}>Doe</Text>
                <Text style={styles.tableCell}>janed</Text>
                <Text style={styles.tableCell}>jane@doe.com</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>2</Text>
                <Text style={styles.tableCell}>John</Text>
                <Text style={styles.tableCell}>Doe</Text>
                <Text style={styles.tableCell}>johnd</Text>
                <Text style={styles.tableCell}>john@doe.com</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>3</Text>
                <Text style={styles.tableCell}>Alice</Text>
                <Text style={styles.tableCell}>Smith</Text>
                <Text style={styles.tableCell}>alices</Text>
                <Text style={styles.tableCell}>alice@smith.com</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>4</Text>
                <Text style={styles.tableCell}>Bob</Text>
                <Text style={styles.tableCell}>Johnson</Text>
                <Text style={styles.tableCell}>bobj</Text>
                <Text style={styles.tableCell}>bob@johnson.com</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>5</Text>
                <Text style={styles.tableCell}>Charlie</Text>
                <Text style={styles.tableCell}>Brown</Text>
                <Text style={styles.tableCell}>charlieb</Text>
                <Text style={styles.tableCell}>charlie@brown.com</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>6</Text>
                <Text style={styles.tableCell}>David</Text>
                <Text style={styles.tableCell}>Miller</Text>
                <Text style={styles.tableCell}>davidm</Text>
                <Text style={styles.tableCell}>david@miller.com</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>7</Text>
                <Text style={styles.tableCell}>Eve</Text>
                <Text style={styles.tableCell}>Martin</Text>
                <Text style={styles.tableCell}>evem</Text>
                <Text style={styles.tableCell}>eve@martin.com</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>8</Text>
                <Text style={styles.tableCell}>Frank</Text>
                <Text style={styles.tableCell}>Taylor</Text>
                <Text style={styles.tableCell}>frankt</Text>
                <Text style={styles.tableCell}>frank@taylor.com</Text>
            </View>
            <TouchableOpacity
                style={styles.logoOpenTouchable}
                onPress={() => navigation.navigate("Home")}
            >
                <Image source={BetBobOpen} style={styles.logoOpen} />
            </TouchableOpacity>
            <Footer />
        </View>
    );
}

// const [users, setUsers] = useState([]);

// useEffect(() => {
//     fetch("http://localhost:3000/users")
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("Data:", data); // log the data
//             setUsers(data);
//         })
//         .catch((error) => console.error(error));
// }, []);

// console.log("Users:", users); // log the users state

/* <Text style={styles.headerText}>Welcome to UsersScreen</Text>
            {users.map((user, index) => (
                <View key={index}>
                    <Text>First Name: {user.firstname}</Text>
                    <Text>Last Name: {user.lastname}</Text>
                    <Text>Username: {user.username}</Text>
                    <Text>Email: {user.email}</Text>
                </View>
            ))}
            */
