import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import i18next from 'i18next';
import TodosList from './components/TodosList';
import StackNavigator from '../../navigator/stack-navigator/StackNavigator';
import { useTheme, dynamicStyles } from '../../theme/theme';

const HomeScreen = ({ navigation }) => {
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };
  const [todos, setTodos] = useState([
    { id: 1, title: 'Specify your availability', subtitle: 'NOWJOBS is asking for your availability' },
    { id: 2, title: 'Backup jobs (6)', subtitle: 'First job is on 25/02' },
  ]);
  return (
    <View style={styles.container}>
      <TodosList todos={todos} navigation={navigation} />
      <View style={styles.buttonContainer}>
        <Button
          title={i18next.t('lastMinJob', { defaultValue: 'Last Minute Job' })}
          onPress={() => navigation.navigate('LastMinJob')}
          color="#841584"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={i18next.t('profile', { defaultValue: 'Profile' })}
          onPress={() => navigation.navigate('Profile')}
          color="#841584"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={i18next.t('settings', { defaultValue: 'Settings' })}
          onPress={() => navigation.navigate('Settings')}
          color="#841584"
        />
      </View>

      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  buttonContainer: {
    margin: 10,
  },
});

export default HomeScreen;
