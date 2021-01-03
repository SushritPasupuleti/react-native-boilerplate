/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './store';
import DrawerMain from './components/drawer';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        accent: 'yellow',
    },
};

export default function Main() {
    console.log("Store: ", store)
    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <NavigationContainer>
                    <DrawerMain />
                </NavigationContainer>
            </PaperProvider>
        </StoreProvider>
    );
}


AppRegistry.registerComponent(appName, () => Main);
