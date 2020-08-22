import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

const RegisterScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const handlePress = () => {
        //fetch
    };

    return (
        <View style={styles.container}>
            <Header title="Register" />
            <View style={styles.form}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    placeholder="Username..."
                    onChangeText={text => setUsername(text)}
                    style={styles.input} />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    secureTextEntry
                    placeholder="Password..."
                    onChangeText={text => setPassword(text)}
                    style={styles.input} />
                <Text style={styles.label}>Repeat password</Text>
                <TextInput
                    secureTextEntry
                    placeholder="Repeat password..."
                    onChangeText={text => setRePassword(text)}
                    style={styles.input} />
                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.btn}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212121"
    },
    form: {
        alignItems: "center",
        marginTop: 50
    },
    input: {
        backgroundColor: "#fff",
        width: 300,
        height: 30,
        padding: 4,
        borderRadius: 3
    },
    label: {
        color: "#fff",
        marginVertical: 7,
        fontSize: 14,
    },
    btn: {
        textAlign: "center",
        marginTop: 30,
        width: 300,
        backgroundColor: "#20639b",
        paddingVertical: 10,
        borderRadius: 5,
        color: "#fff",
        fontSize: 16
    }
});

export default RegisterScreen;