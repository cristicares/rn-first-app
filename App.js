import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput 
          placeholder="Aqui hay un text input"
          style={{ width: '80%', borderColor: 'gray', borderWidth: 1, padding: 10 }}
        />
        <Button title="ADD" />
      </View>
      <View>
      </View>
    </View>
  );
}
