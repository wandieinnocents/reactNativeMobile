import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const ProfileScreen = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <FontAwesome5 name={'user-check'} size={100} color="green" />
      <Text  style={{ fontSize:20}}>This is Profile  Page</Text>
    </View>
  );
}

export default ProfileScreen;