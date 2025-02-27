// bottom-tab-navigator.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import i18next from 'i18next';

import VacanciesScreen from '../../screens/vacancies-screen';
import ApplicationScreen from '../../screens/application-screen';
import ChatScreen from '../../screens/chat-screen';
import PlanningScreen from '../../screens/planning-screen';
import StackNavigator from '../stack-navigator';

// Import your SVG icons
import VacanciesIcon1 from '../../assets/icons/bottom-tab-navigator-icons/in-svg-form/vacature.svg';
import VacanciesIcon2 from '../../assets/icons/bottom-tab-navigator-icons/in-svg-form/main-vacature.svg';
import { ApplicationIcon, HomeIcon, VacanciesIcon, ChatIcon, PlanningIcon } from '../../assets/icons/bottom-tab-navigator-icons';

type IconProps = {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
};

type BottomTabParamList = {
  Home: undefined;
  Vacancies: undefined;
  Application: undefined;
  Chat: undefined;
  Planning: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }: IconProps) => {
        let IconComponent = ApplicationIcon;

        switch (route.name) {
        case 'Home':
          IconComponent = HomeIcon;
          break;
        case 'Vacancies':
          IconComponent = VacanciesIcon;
          break;
        case 'Application':
          IconComponent = VacanciesIcon1;
          break;
        case 'Chat':
          IconComponent = VacanciesIcon2;
          break;
        case 'Planning':
          IconComponent = PlanningIcon;
          break;
        }

        return (
        <IconComponent
          width={24}
          height={24}
          fill={focused ? '#ff6f00' : '#d3d3d3'}
          stroke={focused ? '#000' : '#dfdfdf'}
          strokeWidth={3}
        />
        );
      },
      tabBarActiveTintColor: '#ff6f00',
      tabBarInactiveTintColor: '#d3d3d3',
      tabBarStyle: {
        height: Platform.select({
        ios: 90,
        android: 70,
        }),
        paddingBottom: Platform.select({
        ios: 30,
        android: 10,
        }),
      },
      headerShown: true,
      headerTitleAlign: 'center',
      headerStyle: {
        height: Platform.select({
          ios: 44,
          android: 56,
        }),
      },
      })}
    >
      <Tab.Screen 
      name="Home" 
      component={StackNavigator} 
      options={{ 
        title: i18next.t('home', { defaultValue: 'Home' }),
        headerShown: false,
      }}
      />
      <Tab.Screen 
      name="Vacancies" 
      component={VacanciesScreen} 
      options={{ 
        title: i18next.t('vacancies', { defaultValue: 'Vacancies' }),
        headerShown: true,
      }}
      />
      <Tab.Screen 
      name="Application" 
      component={ApplicationScreen}
      options={{ 
        title: i18next.t('application', { defaultValue: 'Applications' }),
        headerShown: true,
      }}
      />
      <Tab.Screen 
      name="Planning" 
      component={PlanningScreen} 
      options={{ 
        title: i18next.t('planning', { defaultValue: 'Planning' }),
        headerShown: true,
      }}
      />
      <Tab.Screen 
      name="Chat" 
      component={ChatScreen}
      options={{ 
        title: i18next.t('chat', { defaultValue: 'Chat' }),
        headerShown: true,
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;