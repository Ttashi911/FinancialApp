import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from '../screens/TransactionsListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';
import { navigatorStyles } from '../styles';

const Stack = createStackNavigator();

const TransactionsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: navigatorStyles.header,
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Transactions List" component={TransactionsListScreen} />
      <Stack.Screen name="Transaction Detail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
};

export default TransactionsStackNavigator;
