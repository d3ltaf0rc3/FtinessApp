import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Menu = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Icon style={styles.btn} onPress={props.handleClick} name="close-outline" color="#fff" size={40} />
            <View style={styles.linkContainer}>
                <Text onPress={() => navigation.navigate("Login")} style={styles.link}>Login</Text>
                <Text onPress={() => navigation.navigate("Register")} style={styles.link}>Register</Text>
                <Text onPress={() => navigation.navigate("Home")} style={styles.link}>Home</Text>
                <Text onPress={() => navigation.navigate("All workouts")} style={styles.link}>All Workouts</Text>
                <Text onPress={() => navigation.navigate("Add a workout")} style={styles.link}>Add a workout</Text>
                <Text onPress={() => navigation.navigate("Login")} style={styles.link}>Logout</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        backgroundColor: "#455a64",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: 170,
        alignItems: "center"
    },
    btn: {
        position: "absolute",
        top: 5,
        right: 5
    },
    link: {
        marginTop: 20,
        color: "#fff",
        fontSize: 20
    },
    linkContainer: {
        marginTop: 70,
        textAlign: "center"
    }
})

export default Menu;