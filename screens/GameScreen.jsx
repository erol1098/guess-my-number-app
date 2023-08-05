import { StyleSheet, View } from 'react-native';
import Title from '../components/Text/Title';

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess" />
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
