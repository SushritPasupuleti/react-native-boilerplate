/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './store';

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
                <App />
            </PaperProvider>
        </StoreProvider>
    );
}


AppRegistry.registerComponent(appName, () => Main);
