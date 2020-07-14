import React from 'react';
import { Button } from 'react-native';
import auth from '@react-native-firebase/auth';

function logout() {

    async function onGoogleButtonPress() {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    return (
        <Button
            title="Sign Out"
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        />
    )
}

export default logout
