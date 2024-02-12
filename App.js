import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider} from "native-base";

import { LinearGradient } from 'expo-linear-gradient';

import AppNavigator from './src/navigator/AppNavigator';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};
export default function App() {
  const Tab = createBottomTabNavigator()

  return (
    <NativeBaseProvider config={config}>
      <AppNavigator/>
    </NativeBaseProvider>

  );
}

