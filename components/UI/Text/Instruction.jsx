import { StyleSheet, Text } from 'react-native';

import { Colors } from '../../../constants/colors';

const Instruction = ({ text, style }) => {
  return <Text style={[styles.innstructionText, style]}>{text}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
  innstructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
