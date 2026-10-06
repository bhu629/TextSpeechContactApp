import { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const languages = ['en-US', 'fi-FI', 'sv-SE'];

export default function TextSpeech() {
  const [text, setText] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const speak = () => {
    Speech.speak(text, { language: languages[selectedIndex] });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write text here"
        value={text}
        onChangeText={setText}
      />
      <SegmentedControl
        style={styles.segment}
        values={['English', 'Suomi', 'Svenska']}
        selectedIndex={selectedIndex}
        onChange={(event) => setSelectedIndex(event.nativeEvent.selectedSegmentIndex)}
      />
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 20,
  },
  segment: {
    marginBottom: 20,
  },
});
