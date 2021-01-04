/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Title,
  Appbar,
  useTheme,
} from 'react-native-paper';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Button, Snackbar } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import Counter from './components/counter';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import auth from '@react-native-firebase/auth';
import DrawerContent from './components/drawer';
import { FAB } from 'react-native-paper';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { PreferencesContext } from './context/preferencesContext';
import store from './store';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Drawer = createDrawerNavigator();

const App = (props) => {

  const paperTheme = useTheme();
  const { rtl, theme, toggleRTL, toggleTheme } = React.useContext(
    PreferencesContext
  );
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const _handleSearch = () => console.log('Searching');

  console.log("Auth Data from Redux: ", props.auth.UserAuthData.user)

  // if (initializing) return null;

  if (!props.auth.UserAuthData.user) {
    return (
      <View>
        <View style={styles.loginSection}>
          <Title style={styles.title}>Login :)</Title>
        </View>
        <LoginButton></LoginButton>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => { console.log('Pressed label'); props.navigation.toggleDrawer(); }}></Appbar.Action>
        <Appbar.Content title="Firebase + Redux" subtitle="Firedup State!" />
      </Appbar.Header>
      {/* <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button> */}
      <Text style={styles.greeting}>Welcome {props.auth.UserAuthData.user.email}</Text>
      <LogoutButton></LogoutButton>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
  </Snackbar>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        // loading={true}
        onPress={() => console.log('Pressed')}
      />
      <Counter></Counter>
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="archive"
          onPress={() => console.log('Pressed archive')}
        />
        <Appbar.Action icon="mail" onPress={() => { console.log('Pressed mail'); onToggleSnackBar() }} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log('Pressed delete')}
        />
      </Appbar>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  loginSection: {
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  bottom: {
    borderRadius: 250,
    margin: 20,
    marginBottom: 20,
  },
  greeting: {
    margin: 10
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

App.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})


export default connect(mapStateToProps, {

})(App);
