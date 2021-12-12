import * as React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './screens/Main/components/Header/Header';
import MainScreen from './screens/Main/MainScreen'
import Footer from './screens/Main/components/Footer/Footer'
import { mainStyle } from './screens/Main/styles';

export default function App() {
  return (
    <SafeAreaView style={mainStyle.conteiner}>
      <Header />
      <MainScreen />
      <Footer />
    </SafeAreaView>
  );
}