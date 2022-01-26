import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const HomeScreen = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <FontAwesome5 name={'home'} size={100} color="green" />
      <Text  style={{ fontSize:20}}>This is Home Page</Text>
    </View>
  );
}

export default HomeScreen;