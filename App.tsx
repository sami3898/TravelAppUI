import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

// Screens
import IntroScreen from './src/screens/IntroScreen'


const Stack = createNativeStackNavigator<IntoStackParamList>();


export type IntoStackParamList = {
  IntoScreen: undefined;
}

const IntroStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='IntoScreen' component={IntroScreen}/>
    </Stack.Navigator>
  )
}



const App = () => {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  })

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <IntroScreen />
    </NavigationContainer>
  )
}

export default App;