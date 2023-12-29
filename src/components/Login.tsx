import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Login = ({ navigation }: any) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Validate username and password
    if (username && password) {
      // Handle login logic here (e.g., API call)
      // Redirect to Products page after successful login
      navigation.navigate('Products');
    } else {
      // Display error message for invalid credentials
      console.log('Invalid credentials. Please try again.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

export default Login;
