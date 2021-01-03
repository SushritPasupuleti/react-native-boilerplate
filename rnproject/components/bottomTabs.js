import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Portal, FAB } from 'react-native-paper';
import App from '../App';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        shifting={true}
        sceneAnimationEnabled={false}
      >
          <Tab.Screen
          name="Home"
          component={App}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="Feed"
          component={PlaceholderFeed}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={PlaceholderDetails}
          options={{
            tabBarIcon: 'bell-outline',
          }}
        />
        <Tab.Screen
          name="Messages"
          component={PlaceholderMessages}
          options={{
            tabBarIcon: 'message-text-outline',
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          icon="feather"
          style={{
            position: 'absolute',
            bottom: 100,
            right: 16,
          }}
        />
      </Portal>
    </React.Fragment>
  );
};

function PlaceholderFeed() {
    return (
        <View>
            <Text>Feed</Text>
        </View>
    )
}

function PlaceholderMessages() {
    return (
        <View>
            <Text>Messages</Text>
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