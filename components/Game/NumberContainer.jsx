import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

const NumberContainer = ({ text = '' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{text}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
