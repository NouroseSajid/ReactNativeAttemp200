import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/navigator/bottom-tab-navigator/BottomTabNavigation';
import './src/i18n/config';
import { ThemeProvider } from './src/theme/theme';


const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <ThemeProvider>
          <NavigationContainer>
            <BottomTabNavigation />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;