import * as React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './screens/Main/components/Header/Header';
import MainScreen from './screens/Main/MainScreen'
import Footer from './screens/Main/components/Footer/Footer'
import { style } from './screens/Main/components/styles';

export default function App() {
  return (
    <SafeAreaView style={style.conteiner}>
      <Header />
      <MainScreen />
      <Footer />
    </SafeAreaView>
  );
}