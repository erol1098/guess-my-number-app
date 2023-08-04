import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import { StyleSheet, ImageBackground } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.image}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.15,
  },
});
