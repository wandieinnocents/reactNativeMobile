import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const ServiceHistory = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is requests new</Text>
    </View>
  );
}

export default ServiceHistory;