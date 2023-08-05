import { View, Text, Pressable, StyleSheet } from 'react-native';

import { Colors } from '../../../constants/colors';

const PrimaryButton = ({ text = 'Primary', onPress = () => {} }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    fontFamily: 'open-sans',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
