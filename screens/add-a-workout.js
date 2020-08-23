import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Wrapper from '../components/Wrapper';
import { Picker } from "@react-native-community/picker";
import Icon from 'react-native-vector-icons/Ionicons';

const AddAWorkoutScreen = () => {
    const [type, setType] = useState();
    const date = (new Date()).toISOString().substring(0, 10);

    const handlePress = () => {

    };

    return (
        <Wrapper title="Add a workout">
            <View style={styles.innerContainer}>
                <Text style={styles.text}>Choose a workout type:</Text>
                <Picker
                    selectedValue={type}
                    style={styles.picker}
                    onValueChange={itemValue =>
                        setType(itemValue)
                    }>
                    <Picker.Item label="Back workout" value="Back" />
                    <Picker.Item label="Chest workout" value="Chest" />
                    <Picker.Item label="Glutes workout" value="Glutes" />
                    <Picker.Item label="Hamstrings workout" value="Hamstrings" />
                </Picker>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>Date:</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={handlePress}>
                <Icon name="add-circle-outline" color="#fff" size={32} />
                <Text style={styles.text}>Add</Text>
            </TouchableOpacity>
        </Wrapper>
    )
};

const styles = StyleSheet.create({
    picker: {
        height: 40,
        width: 250,
        marginVertical: 10,
        backgroundColor: "#797979",
        color: "#fff",
    },
    text: {
        color: "#fff",
        fontSize: 24
    },
    date: {
        color: "#20639b",
        fontSize: 30
    },
    innerContainer: {
        marginTop: 50,
        alignItems: "center"
    },
    btn: {
        flexDirection: "row",
        marginTop: 50,
        backgroundColor: "#20639b",
        width: 200,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    }
})

export default AddAWorkoutScreen;