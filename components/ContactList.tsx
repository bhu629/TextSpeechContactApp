import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import ContactItem from './ContactItem';

const fields = [Contacts.ContactField.FULL_NAME, Contacts.ContactField.PHONES] as const;

type ContactDetails = Contacts.PartialContactDetails<typeof fields>;

export default function ContactList() {
  const [contacts, setContacts] = useState<ContactDetails[]>([]);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const data = await Contacts.Contact.getAllDetails(fields);
      setContacts(data);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            name={item.fullName}
            phone={item.phones.length > 0 ? item.phones[0].number : ''}
          />
        )}
      />
      <View style={styles.button}>
        <Button title="Get Contacts" onPress={getContacts} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 45,
  },
  list: {
    marginLeft: '10%',
  },
  button: {
    marginBottom: 40,
  },
});
