// navigation-constants.js
import { Platform } from 'react-native';
import i18next from 'i18next';

// Import all screen components
import HomeScreen from '../screens/home-screen';
import LastMinScreen from '../screens/last-min-job-screen';
import ProfileScreen from '../screens/profile-screen';
import SettingsScreen from '../screens/settings-screen';
import BackupJobs from '../screens/backup-jobs';
import VacanciesScreen from '../screens/vacancies-screen';
import ApplicationScreen from '../screens/application-screen';
import ChatScreen from '../screens/chat-screen';
import PlanningScreen from '../screens/planning-screen';
import StackNavigator from '../navigator/stack-navigator';

// Define constants
const ICON_SIZE = 24;
const ICON_FILL_FOCUSED = 'pink';
const ICON_FILL_UNFOCUSED = 'none';
const ICON_STROKE_FOCUSED = 'black';
const ICON_STROKE_UNFOCUSED = 'gray';
const ICON_STROKE_WIDTH = 5;
const TAB_BAR_ACTIVE_TINT_COLOR = 'pink';
const TAB_BAR_INACTIVE_TINT_COLOR = 'darkpink';
const TAB_BAR_HEIGHT_IOS = 90;
const TAB_BAR_HEIGHT_ANDROID = 70;
const TAB_BAR_PADDING_BOTTOM_IOS = 30;
const TAB_BAR_PADDING_BOTTOM_ANDROID = 10;
const HEADER_HEIGHT_IOS = 44;
const HEADER_HEIGHT_ANDROID = 56;

export const NAVIGATION_CONFIG = {
  headerTitleAlign: 'center',
  defaultHeaderShown: true,
};

export const HEADER_CONFIG = {
  height: Platform.select({
    ios: HEADER_HEIGHT_IOS,
    android: HEADER_HEIGHT_ANDROID,
  }),
  ...NAVIGATION_CONFIG,
};

export const TAB_BAR_CONFIG = {
  iconSize: ICON_SIZE,
  activeTintColor: TAB_BAR_ACTIVE_TINT_COLOR,
  inactiveTintColor: TAB_BAR_INACTIVE_TINT_COLOR,
  height: Platform.select({
    ios: TAB_BAR_HEIGHT_IOS,
    android: TAB_BAR_HEIGHT_ANDROID,
  }),
  paddingBottom: Platform.select({
    ios: TAB_BAR_PADDING_BOTTOM_IOS,
    android: TAB_BAR_PADDING_BOTTOM_ANDROID,
  }),
  iconFill: {
    focused: ICON_FILL_FOCUSED,
    unfocused: ICON_FILL_UNFOCUSED,
  },
  iconStroke: {
    focused: ICON_STROKE_FOCUSED,
    unfocused: ICON_STROKE_UNFOCUSED,
  },
  strokeWidth: ICON_STROKE_WIDTH,
};

export const STACK_SCREENS = [
  { 
    name: 'Home',
    component: HomeScreen,
    translationKey: 'home',
    options: { headerShown: false }
  },
  { 
    name: 'backupJobs',
    component: BackupJobs,
    translationKey: 'backupJobs',
  },
  { 
    name: 'LastMinJob',
    component: LastMinScreen,
    translationKey: 'lastMinJob',
  },
  { 
    name: 'Profile',
    component: ProfileScreen,
    translationKey: 'profile',
  },
  { 
    name: 'Settings',
    component: SettingsScreen,
    translationKey: 'settings',
  },
];

export const TAB_SCREENS = [
  { 
    name: 'Home',
    component: StackNavigator,
    translationKey: 'home',
    showHeader: false
  },
  { 
    name: 'Vacancies',
    component: VacanciesScreen,
    translationKey: 'vacancies',
  },
  { 
    name: 'Application',
    component: ApplicationScreen,
    translationKey: 'application',
  },
  { 
    name: 'Planning',
    component: PlanningScreen,
    translationKey: 'planning',
  },
  { 
    name: 'Chat',
    component: ChatScreen,
    translationKey: 'chat',
  },
];