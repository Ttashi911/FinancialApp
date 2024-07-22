import React from 'react';
import { View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { globalStyles, transactionDetailStyles } from '../styles';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  if (!transaction) {
    return (
      <View style={globalStyles.container}>
        <Text style={transactionDetailStyles.noData}>Transaction data is not available.</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Card style={transactionDetailStyles.card}>
        <Card.Content>
          <View style={transactionDetailStyles.topSection}>
            <Text style={transactionDetailStyles.amount}>{transaction.amount}</Text>
            <Text style={transactionDetailStyles.store}>{transaction.name}</Text>
            <Text style={transactionDetailStyles.location}>{transaction.location}</Text>
          </View>
          <View style={transactionDetailStyles.detailSection}>
            <View style={transactionDetailStyles.row}>
              <Text style={transactionDetailStyles.infoLabel}>Transaction Date</Text>
              <Text style={transactionDetailStyles.date}>{transaction.date}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default TransactionDetailScreen;
