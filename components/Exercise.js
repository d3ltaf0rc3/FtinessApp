import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Dropdown from './ExerciseDropdown';

const Exercise = () => {
    const [displayMenu, setDisplay] = useState(false);

    const handlePress = () => {
        setDisplay(!displayMenu);
    };

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={handlePress} style={styles.container}>
                <Icon name={`arrow-${displayMenu ? "up" : "down"}-outline`} color="#b9bbb6" size={32} />
                <Text style={styles.exercise}>Seated calf raise</Text>
            </TouchableOpacity>
            {displayMenu ? <Dropdown /> : null}
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 5
    },
    container: {
        flexDirection: "row",
        backgroundColor: "#363636",
        width: Dimensions.get("window").width - 50,
        borderWidth: 1,
        borderColor: "#3e424b",
        alignItems: "center"
    },
    exercise: {
        marginLeft: 30,
        color: "#d9dddc",
        fontSize: 18
    }
});

export default Exercise;