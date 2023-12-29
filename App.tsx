import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

// Your screen components remain the same
import LoginPage from './src/screens/LoginPage';
import SignupPage from './src/screens/SignupPage';
import ProductsPage from './src/screens/ProductsPage';
import PurchasesPage from './src/screens/PurchasesPage';
import UserProfilePage from './src/screens/UserProfilePage';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Products: undefined;
  Purchases: undefined;
  UserProfile: undefined;
};

type ScreenProps<RouteName extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Products" component={ProductsPage} />
        <Stack.Screen name="Purchases" component={PurchasesPage} />
        <Stack.Screen name="UserProfile" component={UserProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
