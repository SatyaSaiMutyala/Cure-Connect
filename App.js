import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';

export default function App() {
  return (
    <>
    <StatusBar style="light" backgroundColor="#5792a4" />
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    </>
  );
}


