import React from 'react';
import { StyleSheet } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import GServices from './../android/app/google-services.json';
import { compose } from 'redux';
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native-paper';

GoogleSignin.configure({
            webClientId: GServices.client[0].oauth_client[1].client_id,
        });

export default function GoogleSignInButton() {

    async function onGoogleButtonPress() {

        console.log("WebClientId: ", GServices.client[0].oauth_client[0].client_id)
        
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        console.log("idToken: ", idToken)

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        console.log(googleCredential)
        return auth().signInWithCredential(googleCredential);
    }

    return (
        <Button
        style={styles.login}
            mode="contained"
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        >Google Sign-In</Button>
    );
}

const styles = StyleSheet.create({
    login: {
        margin: 20,
        borderRadius: 125,
    }
});