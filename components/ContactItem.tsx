import { StyleSheet, Text, View } from 'react-native';

type Props = {
  name: string | null;
  phone?: string;
};

export default function ContactItem({ name, phone }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{name}</Text>
      <Text>{phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  name: {
    marginRight: 6,
  },
});
