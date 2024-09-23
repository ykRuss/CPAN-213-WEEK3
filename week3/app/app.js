import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, Button, View } from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      { }
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10, width: '80%' }}
        placeholder="Type something here"
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      
      { }
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        You typed: {inputValue}
      </Text>

      { }
      <Button 
        title="Show Input" 
        onPress={() => alert(`You typed: ${inputValue}`)} 
      />

      { }
      <View style={{ marginTop: 30 }}>
        <Text>Experiment with different components!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
