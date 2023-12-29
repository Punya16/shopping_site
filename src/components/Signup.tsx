import React from 'react';
import { View, TextInput, Button } from 'react-native';

const Signup = ({ navigation }: any) => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignup = () => {
    // Validate name and password
    if (name && password) {
      // Handle signup logic here (e.g., API call)
      // Redirect to Login page after successful signup
      navigation.navigate('Login');
    } else {
      // Display error message for incomplete details
      console.log('Please provide name and password.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default Signup;
