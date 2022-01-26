import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RequestsScreen = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <FontAwesome5 name={'taxi'} size={100} color="blue" />
      <Text  style={{ fontSize:20}}>This is Requests Page</Text>
    </View>
  );
}

export default RequestsScreen;