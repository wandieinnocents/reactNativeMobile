import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const HomeScreen = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is home new</Text>
    </View>
  );
}

export default HomeScreen;