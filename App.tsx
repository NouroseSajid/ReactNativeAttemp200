import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'; // Import SafeAreaView and StyleSheet
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/navigator/bottom-tab-navigator/BottomTabNavigation';
import './src/i18n/config'; // Import the i18next configuration

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}> {/* Wrap in SafeAreaView */}
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Ensure background color is set
  },
});

export default App;