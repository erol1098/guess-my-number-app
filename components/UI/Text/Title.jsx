import { StyleSheet, Text } from 'react-native';

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    padding: 12,
    color: '#fff',
    borderColor: '#fff',
  },
});
