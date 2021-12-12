import * as React from 'react';
import { SafeAreaView } from 'react-native';
import HomeMain from './screens/Main/MainScreen';
import Header from './screens/Main/components/Header/Header';
import Footer from './screens/Main/components/Footer/Footer';
import { mainStyle } from './screens/Main/styles';

function App() {
  return (
    <SafeAreaView style={mainStyle.conteiner}>
      <Header />
      <HomeMain />
      <Footer />
    </SafeAreaView>
  );
}

export default App;