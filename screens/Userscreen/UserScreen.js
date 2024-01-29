import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import BetBob from "../../assets/BetBob.png";
import BetBobOpen from "../../assets/betbobopenmouthNoBack.png";
import { styles } from "./UserScreenStyles";
import Footer from "../../Components/Footer/Footer";
import users from "./users.json";

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
                <Text style={styles.headerCell}>Username</Text>
                <Text style={styles.headerCell}>First Name</Text>
                <Text style={styles.headerCell}>Last Name</Text>
                <Text style={styles.headerCell}>Email</Text>
            </View>
            {users.map((user, index) => (
                <View key={index} style={styles.tableRow}>
                    <Text style={styles.tableCell}>{user.id}</Text>
                    <Text style={styles.tableCell}>{user.username}</Text>
                    <Text style={styles.tableCell}>{user.firstName}</Text>
                    <Text style={styles.tableCell}>{user.lastName}</Text>
                    <Text style={styles.tableCell}>{user.email}</Text>
                </View>
            ))}
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
