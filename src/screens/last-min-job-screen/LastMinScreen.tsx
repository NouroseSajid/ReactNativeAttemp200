import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const LastMinScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
  },
});

export default LastMinScreen;