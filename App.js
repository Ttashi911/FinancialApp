import React from 'react';
import TabNavigator from './navigation/TabNavigator';
import { TransactionsProvider } from './screens/TransactionsContext';

const App = () => {
  return (
    <TransactionsProvider>
      <TabNavigator />
    </TransactionsProvider>
  );
};

export default App;
