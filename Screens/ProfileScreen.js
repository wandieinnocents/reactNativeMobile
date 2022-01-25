import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const ProfileScreen = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is profile</Text>
    </View>
  );
}

export default ProfileScreen;