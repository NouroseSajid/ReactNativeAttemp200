import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import i18next from 'i18next';
import { useTheme, dynamicStyles } from '../../theme/theme';
import { TAB_BAR_CONFIG, HEADER_CONFIG, STACK_SCREENS, TAB_SCREENS } from '../navigation-constants';

// Import your icon components
import { ApplicationIcon, HomeIcon, VacanciesIcon, ChatIcon, PlanningIcon } from '../../assets/icons/bottom-tab-navigator-icons';

type IconProps = {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  focused?: boolean;
};

type BottomTabParamList = {
  Home: undefined;
  Vacancies: undefined;
  Application: undefined;
  Chat: undefined;
  Planning: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const ICON_COMPONENTS = {
  Home: HomeIcon,
  Vacancies: VacanciesIcon,
  Application: ApplicationIcon,
  Chat: ChatIcon,
  Planning: PlanningIcon,
};

const BottomTabNavigation: React.FC = () => {
  const { colors } = useTheme();
  const styles = dynamicStyles(colors);

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }: IconProps) => {
            const IconComponent = ICON_COMPONENTS[route.name] || HomeIcon;
            return (
              <IconComponent
                width={TAB_BAR_CONFIG.iconSize}
                height={TAB_BAR_CONFIG.iconSize}
                fill={focused ? colors.tabActive : 'transparent'}
                stroke={focused ? colors.primary : colors.textSecondary}

                strokeWidth={TAB_BAR_CONFIG.strokeWidth}
              />
            );
          },
          tabBarActiveTintColor: colors.tabActive,
          tabBarInactiveTintColor: colors.tabInactive,
          tabBarStyle: {
            backgroundColor: colors.surface,
            height: TAB_BAR_CONFIG.height,
            paddingBottom: TAB_BAR_CONFIG.paddingBottom,
            borderTopColor: colors.border,
          },
          headerStyle: {
            backgroundColor: colors.headerBg,
            borderBottomColor: colors.border,
            height: HEADER_CONFIG.height,
          },
          headerTitleStyle: {
            color: colors.textPrimary,
          },
        })}
      >
        {TAB_SCREENS.map(screen => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              title: i18next.t(screen.translationKey, { defaultValue: screen.name }),
              headerShown: screen.showHeader,
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default BottomTabNavigation;