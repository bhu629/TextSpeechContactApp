import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ContactList from './components/ContactList';
import TextSpeech from './components/TextSpeech';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ContactList /> */}
      <TextSpeech />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
