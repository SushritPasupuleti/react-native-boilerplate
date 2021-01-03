import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import App from './App';

const Stack = createStackNavigator()

export const FeedStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen
                name="Home"
                component={App}
                
            />
            <Stack.Screen
                name="Feed"
                component={PlaceholderFeed}
                options={{ headerTitle: 'Firebase + Redux' }}
            />
            <Stack.Screen
                name="Details"
                component={PlaceholderDetails}
                options={{ headerTitle: 'Firebase + Redux Details' }}
            />
        </Stack.Navigator>
    );
};

function PlaceholderHome() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

function PlaceholderFeed() {
    return (
        <View>
            <Text>Feed</Text>
        </View>
    )
}

function PlaceholderDetails() {
    return (
        <View>
            <Text>Details</Text>
        </View>
    )
}