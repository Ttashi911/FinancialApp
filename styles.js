import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#89939e',
  },
  card: {
    marginVertical: 8,
    padding: 1,
    backgroundColor: '#c5d3e2'
  },
  summaryCard: {
    marginVertical: 8,
    padding: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionAmount: {
    fontSize: 16,
    color: 'green',
    marginRight: 8,
  },
  transactionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export const transactionDetailStyles = StyleSheet.create({
  card: {
    marginVertical: 16,
    padding: 0,
    elevation: 4,
    backgroundColor: '#a7aaae'
  },
  topSection: {
    backgroundColor: '#7093b7',
    padding: 16,
    alignItems: 'center',
    borderRadius: 16,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  store: {
    fontSize: 18,
    color: 'white',
    marginTop: 8,
  },
  location: {
    fontSize: 16,
    color: 'white',
  },
  detailSection: {
    padding: 16,
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: 'grey',
    marginRight: 8,
    fontWeight: 'bold', 
  },
  date: {
    fontSize: 16,
  },
  noData: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export const summaryStyles = StyleSheet.create({
    card: {
      marginVertical: 8,
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#c5d3e2',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    divider: {
      marginVertical: 8,
      backgroundColor: 'black',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    section: {
      marginVertical: 8,
    },
    sectionLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 4,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      flex: 1,
    },
    value: {
      fontSize: 16,
      color: '#333',
      flex: 1,
      textAlign: 'right',
    },
    transactionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    transactionName: {
      fontSize: 16,
      color: '#333',
      flex: 4,
    },
    transactionAmount: {
      fontSize: 16,
      flex: 1,
      textAlign: 'right',
      minWidth: 80,
    },
    highSpendingAmount: {
      color: 'red',
    },
    lowSpendingAmount: {
      color: 'green', 
    },
    icon: {
      marginRight: 8,
    },
  });

  export const navigatorStyles = StyleSheet.create({
    header: {
      backgroundColor: '#cfcfd0',
    },
    footer: {
      backgroundColor: '#cfcfd0',
    },
  });