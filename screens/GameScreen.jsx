import { useEffect, useState } from 'react';

import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Title from '../components/UI/Text/Title';
import NumberContainer from '../components/Game/NumberContainer';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import Card from '../components/UI/Card/Card';
import Instruction from '../components/UI/Text/Instruction';
import GuessLogItem from '../components/Game/GuessLogItem';

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({
  userChoice,
  setGameOver = () => {},
  setRoundsNumber = () => {},
}) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userChoice) {
      setGameOver(true);
      setRoundsNumber(guessRounds.length);
    }
  }, [currentGuess, userChoice]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
      const nextGuess = generateRandomBetween(
        minBoundary,
        maxBoundary,
        currentGuess
      );
      setCurrentGuess(nextGuess);
      setGuessRounds((currentGuessRounds) => [
        nextGuess,
        ...currentGuessRounds,
      ]);
    } else {
      minBoundary = currentGuess + 1;
      const nextGuess = generateRandomBetween(
        minBoundary,
        maxBoundary,
        currentGuess
      );
      setCurrentGuess(nextGuess);
      setGuessRounds((currentGuessRounds) => [
        nextGuess,
        ...currentGuessRounds,
      ]);
    }
  };

  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess" />
      <NumberContainer text={currentGuess} />
      <Card>
        <Instruction style={styles.instructionText} text='Higher or Lower?' />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              text={<Ionicons name='md-remove' size={24} color='#fff' />}
              onPress={nextGuessHandler.bind(this, 'lower')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              text={<Ionicons name='md-add' size={24} color='#fff' />}
              onPress={nextGuessHandler.bind(this, 'greater')}
            />
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.toString()}
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem guessRounds={guessRounds} itemData={itemData} />
          )}
        />
      </View>
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
  instructionText: {
    marginBottom: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
    width: '100%',
  },
});
