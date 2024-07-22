// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TransactionsStackNavigator from './StackNavigator';
import SummaryScreen from '../screens/SummaryScreen';
import { navigatorStyles } from '../styles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Transactions') {
              iconName = 'list';
            } else if (route.name === 'Summary') {
              iconName = 'assessment';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: navigatorStyles.footer,
        })}
      >
        <Tab.Screen
          name="Transactions"
          component={TransactionsStackNavigator}
          options={{ 
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Summary"
          component={SummaryScreen}
          options={{
            headerStyle: navigatorStyles.header,
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
