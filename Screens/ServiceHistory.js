import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const ServiceHistory = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <FontAwesome5 name={'clock'} size={100} color="orange" />
      <Text  style={{ fontSize:20}}>This is History Page</Text>
    </View>
  );
}

export default ServiceHistory;