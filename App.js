import { useState } from 'react';

import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Colors } from './constants/colors';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGameOver(false);
  };

  const restartGameHandler = () => {
    setUserNumber(null);
    setGameOver(false);
    setRoundsNumber(0);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style='inverted' />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.image}
        >
          <SafeAreaView style={styles.rootScreen}>
            {userNumber ? (
              !gameOver ? (
                <GameScreen
                  userChoice={userNumber}
                  setGameOver={setGameOver}
                  setRoundsNumber={setRoundsNumber}
                />
              ) : (
                <GameOverScreen
                  userNumber={userNumber}
                  roundsNumber={roundsNumber}
                  restartGameHandler={restartGameHandler}
                />
              )
            ) : (
              <StartGameScreen onStartGame={startGameHandler} />
            )}
          </SafeAreaView>
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
