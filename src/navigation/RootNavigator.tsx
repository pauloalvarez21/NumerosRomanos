import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ConversionScreen from '../screens/ConversionScreen';
import InfoScreen from '../screens/InfoScreen';
import { useColors } from '../styles/commonStyles';

const Tab = createBottomTabNavigator();

interface TabIconProps {
  icon: string;
  color: string;
  size: number;
}

function TabIcon({ icon, color, size }: TabIconProps) {
  return <Text style={{ fontSize: size, color }}>{icon}</Text>;
}

const RootNavigator = () => {
  const colors = useColors();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.lightText,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.border,
            borderTopWidth: 1,
            paddingBottom: 4,
            paddingTop: 8,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
            marginBottom: 4,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <TabIcon icon="🏠" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Conversion"
          component={ConversionScreen}
          options={{
            tabBarLabel: 'Convertidor',
            tabBarIcon: ({ color, size }) => (
              <TabIcon icon="🔄" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={InfoScreen}
          options={{
            tabBarLabel: 'Información',
            tabBarIcon: ({ color, size }) => (
              <TabIcon icon="ℹ️" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
