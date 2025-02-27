// stack-navigator.jsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import i18next from 'i18next';

import HomeScreen from '../../screens/home-screen';
import LastMinScreen from '../../screens/last-min-job-screen';
import ProfileScreen from '../../screens/profile-screen';
import SettingsScreen from '../../screens/settings-screen';
import BackupJobs from '../../screens/backup-jobs';

const Stack = createStackNavigator();

function StackNavigator() {
  const createScreen = (name, component, translationKey, defaultValue, options = {}) => (
    <Stack.Screen
      name={name}
      component={component}
      options={{
        title: i18next.t(translationKey, { defaultValue }),
        headerTitleAlign: 'center',
        headerStyle: {
          height: Platform.select({
            ios: 44,
            android: 56,
          }),
        },
        ...options,
      }}
    />
  );

  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: true, // Default to visible headers for all screens in the stack
      }}
    >
      {/* Home Screen - Header Hidden */}
      {createScreen('Home', HomeScreen, 'home', 'Home', { 
        headerShown: false // Only hide header for Home screen
      })}
      
      {/* Other Screens - Headers Visible */}
      {createScreen('backupJobs', BackupJobs, 'backupJobs', 'Backup Jobs')}
      {createScreen('LastMinJob', LastMinScreen, 'lastMinJob', 'Last Minute Job')}
      {createScreen('Profile', ProfileScreen, 'profile', 'Profile')}
      {createScreen('Settings', SettingsScreen, 'settings', 'Settings')}
    </Stack.Navigator>
  );
}

export default StackNavigator;