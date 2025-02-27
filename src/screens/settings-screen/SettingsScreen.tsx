import React from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';
import i18next from 'i18next';
import { useTheme, COLOR_SCHEMES } from '../../theme/theme';

function SettingsScreen() {
  const { colors, isDark, setScheme } = useTheme();
  const styles = dynamicStyles(colors);

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Switch
        value={isDark}
        onValueChange={(value) => {
          setScheme(value ? COLOR_SCHEMES.DARK : COLOR_SCHEMES.LIGHT);
        }}
      />
      <Text style={styles.text}>
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </Text>
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

const dynamicStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
  },
  buttonContainer: {
    margin: 10,
  },
});

export default SettingsScreen;
