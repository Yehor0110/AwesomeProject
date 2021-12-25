import * as React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './screens/Main/components/Header/Header';
import MainScreen from './screens/Main/MainScreen';
import { mainStyle } from './screens/Main/styles';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './screens/Main/components/DrawerNavigation/Drawer'
import { NavigationContainer } from '@react-navigation/native';
import { enableFreeze } from 'react-native-screens';

const Stack = createStackNavigator();

enableFreeze(true);

function App() {
  return (
    <SafeAreaView style={mainStyle.conteiner}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeMain" component={MainScreen} />
          <Stack.Screen name="DrawerNavigation" component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;