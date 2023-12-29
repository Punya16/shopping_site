import React from 'react';
import { View, TextInput, Button } from 'react-native';

const SignupPage = ({ navigation }: any) => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignup = () => {
    // Handle signup logic here
    // Example: Make API call to create a new user
    // Redirect to Login page after successful signup
    navigation.navigate('Login');
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

export default SignupPage;
