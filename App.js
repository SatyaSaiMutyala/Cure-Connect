import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';
import { fonts } from './GlobalStyles/Theme';


export default function App() {
  const fontsLoaded = fonts();

  if (!fontsLoaded) {
      return null;
  }
  return (
    <>
    <StatusBar style="light" backgroundColor="#5792a4" />
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    </>
  );
}


