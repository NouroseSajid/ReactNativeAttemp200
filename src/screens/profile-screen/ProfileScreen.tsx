import React from 'react';
import { View, Text } from 'react-native';
import i18next from 'i18next';

function ProfileScreen() {
  return (
    <View>
      <Text>{i18next.t('profile', { defaultValue: 'Profile Screen' })}</Text>
    </View>
  );
}

export default ProfileScreen;
