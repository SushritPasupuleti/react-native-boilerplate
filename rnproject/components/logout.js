import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const logout = () => {

    async function onGoogleButtonPress() {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    return (
        <Button
            style={styles.logout}
            mode="contained"
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        >Sign Out!</Button>
    )
}

const styles = StyleSheet.create({
    logout: {
        margin: 20,
        borderRadius: 125,
    }
});

export default logout
