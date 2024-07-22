import React, { createContext, useContext, useState } from 'react';

const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([
        { id: '1', name: 'Starbucks', amount: '$12.00', date: '2024-07-19', location: 'Toronto, ON' },
        { id: '2', name: 'Apple Store', amount: '$101.00', date: '2024-07-20', location: 'Vancouver, BC' },
        { id: '3', name: 'Amazon', amount: '$45.00', date: '2024-07-21', location: 'Montreal, QC' },
        { id: '4', name: 'Uber', amount: '$18.50', date: '2024-07-22', location: 'Calgary, AB' },
        { id: '5', name: 'Walmart', amount: '$34.20', date: '2024-07-23', location: 'Ottawa, ON' },
        { id: '6', name: 'Whole Foods', amount: '$56.30', date: '2024-07-24', location: 'Edmonton, AB' },
        { id: '7', name: 'Netflix', amount: '$15.99', date: '2024-07-25', location: 'Winnipeg, MB' },
        { id: '8', name: 'Best Buy', amount: '$200.00', date: '2024-07-26', location: 'Quebec City, QC' },
        { id: '9', name: 'Gas Station', amount: '$40.00', date: '2024-07-27', location: 'Victoria, BC' },
        { id: '10', name: 'Target', amount: '$25.75', date: '2024-07-28', location: 'Halifax, NS' },
      ]);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionsContext);
