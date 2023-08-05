import { StyleSheet, View } from 'react-native';

import { Colors } from '../../../constants/colors';

const Card = ({ children }) => {
  return <View style={styles.screen}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 6,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
