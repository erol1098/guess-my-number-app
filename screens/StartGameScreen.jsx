import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import { useState } from 'react';
import { Colors } from '../constants/colors';
import Title from '../components/UI/Text/Title';
import Card from '../components/UI/Card/Card';
import Instruction from '../components/UI/Text/Instruction';

const StartGameScreen = ({ onStartGame = () => {} }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = (inputText) => {
    const chosenNumber = parseInt(inputText);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    onStartGame(chosenNumber);
  };

  return (
    <View style={styles.root}>
      <Title title='Guess My Number' />
      <Card>
        <Instruction text='Enter a Number' />
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton text='Reset' onPress={resetInputHandler} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              text='Confirm'
              onPress={confirmInputHandler.bind(this, enteredNumber)}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
