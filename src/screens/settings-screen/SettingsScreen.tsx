import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import i18next from 'i18next';

function SettingsScreen() {
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="English"
          onPress={() => changeLanguage('en')}
          color="#841584"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="French"
          onPress={() => changeLanguage('fr')}
          color="#841584"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Dutch"
          onPress={() => changeLanguage('nl')}
          color="#841584"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 10,
  },
});

export default SettingsScreen;
