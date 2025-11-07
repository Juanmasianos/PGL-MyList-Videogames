
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/Colors';

export default function App() {
  return (
    <>
      <View style={styles.header}><Text style={styles.headerText}>Lista Videojuegos</Text></View>
      <View style={styles.temporalContainer}></View>
      <View style={styles.temporalContainer2}></View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 10,
    padding: 20,
    backgroundColor: colors.secondary
  },
  headerText: {
    marginLeft: 30,
    marginTop: 25,
    color: colors.text,
    fontSize: 35
  },
  temporalContainer: {
    flex: 80,
    backgroundColor: colors.primary
  },
  temporalContainer2: {
    flex: 10,
    backgroundColor: colors.secondary
  }
});
