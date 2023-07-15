import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

// Screens
import IntroScreen from './src/screens/IntroScreen';
import HomeScreen from './src/screens/HomeScreen';


const Stack = createNativeStackNavigator<IntoStackParamList>();


export type IntoStackParamList = {
  IntoScreen: undefined;
  HomeScreen: undefined;
}

const IntroStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='IntoScreen' component={IntroScreen} options={{ headerShown: false}}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false, animation: 'slide_from_right'}}/>
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
      <IntroStack />
    </NavigationContainer>
  )
}

export default App;