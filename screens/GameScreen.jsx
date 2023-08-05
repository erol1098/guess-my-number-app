import { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import Title from '../components/UI/Text/Title';
import NumberContainer from '../components/Game/NumberContainer';

const GameScreen = ({ userChoice }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess" />
      <NumberContainer text={currentGuess} />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 48,
  },
});
