import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ConversionScreen from '../screens/ConversionScreen';
import InfoScreen from '../screens/InfoScreen';
import { useColors } from '../styles/commonStyles';
import { texts } from '../utils/i18n';

const Tab = createBottomTabNavigator();

function TabIcon({ focused, source }: { focused: boolean; source: any }) {
  return (
    <Image
      source={source}
      style={{
        width: focused ? 80 : 55,
        height: focused ? 80 : 55,
      }}
      resizeMode="contain"
    />
  );
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
            paddingBottom: 2,
            paddingTop: 8,
            height: 100,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 4,
            fontFamily: 'ChowFun-Regular',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: texts.navigation.home,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                source={require('../assets/images/home.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Conversion"
          component={ConversionScreen}
          options={{
            tabBarLabel: texts.navigation.conversion,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                source={require('../assets/images/conversion.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={InfoScreen}
          options={{
            tabBarLabel: texts.navigation.info,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                source={require('../assets/images/info.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
