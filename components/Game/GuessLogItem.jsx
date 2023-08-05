import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

const GuessLogItem = ({ itemData, guessRounds }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>
        #{guessRounds.length - itemData.index}
      </Text>
      <Text style={styles.itemText}>Opponets's Guess: {itemData.item}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 8,
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: Colors.accent500,
    elevation: 4,
    shadowColor: Colors.primary800,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
    fontSize: 16,
  },
});
