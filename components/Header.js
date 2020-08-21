import React, { useState, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from './Menu';

const Header = (props) => {
    const [displayMenu, setDisplay] = useState(false);

    return (
        <Fragment>
            <View style={styles.header}>
                <Icon onPress={() => setDisplay(true)} style={styles.btn} name="menu-outline" size={30} color="#fff" />
                <Text style={styles.text}>{props.title}</Text>
            </View>
            {displayMenu && <Menu handleClick={() => setDisplay(false)}/>}
        </Fragment>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: "#20639b",
        display: "flex",
        flexDirection: "row"
    },
    text: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        flex: 5,
        marginRight: 50
    },
    btn: {
        flex: 1
    }
});

export default Header;