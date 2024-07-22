import React from 'react';
import { View } from 'react-native';
import { Text, Card, Divider } from 'react-native-paper';
import { useTransactions } from './TransactionsContext';
import { globalStyles, summaryStyles } from '../styles';
import { MaterialIcons } from '@expo/vector-icons';

const SummaryScreen = () => {
  const { transactions } = useTransactions();

  const totalExpenses = transactions.reduce((sum, transaction) => sum + parseFloat(transaction.amount.substring(1)), 0);

  const highSpending = transactions.reduce((prev, current) => (parseFloat(prev.amount.substring(1)) > parseFloat(current.amount.substring(1)) ? prev : current));
  const lowSpending = transactions.reduce((prev, current) => (parseFloat(prev.amount.substring(1)) < parseFloat(current.amount.substring(1)) ? prev : current));

  return (
    <View style={globalStyles.container}>
      <Card style={summaryStyles.card}>
        <Card.Content>
          <View style={summaryStyles.row}>
            <MaterialIcons name="receipt" size={24} color="black" style={summaryStyles.icon} />
            <Text style={summaryStyles.label}>Transactions:</Text>
            <Text style={summaryStyles.value}>{transactions.length}</Text>
          </View>
          <Divider style={summaryStyles.divider} />
          <View style={summaryStyles.row}>
            <MaterialIcons name="account-balance-wallet" size={24} color="black" style={summaryStyles.icon} />
            <Text style={summaryStyles.label}>Balance:</Text>
            <Text style={summaryStyles.value}>${totalExpenses.toFixed(2)}</Text>
          </View>
          <Divider style={summaryStyles.divider} />
          <View style={summaryStyles.section}>
            <Text style={summaryStyles.sectionLabel}>High Spending</Text>
            <View style={summaryStyles.transactionRow}>
              <Text style={summaryStyles.transactionName}>{highSpending.name}</Text>
              <Text style={[summaryStyles.transactionAmount, summaryStyles.highSpendingAmount]}>{highSpending.amount}</Text>
            </View>
          </View>
          <Divider style={summaryStyles.divider} />
          <View style={summaryStyles.section}>
            <Text style={summaryStyles.sectionLabel}>Low Spending</Text>
            <View style={summaryStyles.transactionRow}>
              <Text style={summaryStyles.transactionName}>{lowSpending.name}</Text>
              <Text style={[summaryStyles.transactionAmount, summaryStyles.lowSpendingAmount]}>{lowSpending.amount}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default SummaryScreen;
