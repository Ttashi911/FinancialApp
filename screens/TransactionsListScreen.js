import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Card, Title } from 'react-native-paper';
import { useTransactions } from './TransactionsContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../styles';

const TransactionsListScreen = ({ navigation }) => {
  const { transactions } = useTransactions();

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}>
            <Card style={globalStyles.card}>
              <Card.Content>
                <View style={globalStyles.transactionItem}>
                  <View>
                    <Title style={globalStyles.transactionTitle}>{item.name}</Title>
                  </View>
                  <View style={globalStyles.transactionRight}>
                    <Text style={globalStyles.transactionAmount}>{item.amount}</Text>
                    <Icon name="chevron-right" size={24} color="#6200ea" />
                  </View>
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TransactionsListScreen;
