import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import FavouriteListScreen from '../screens/FavouriteListScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import DashboardScreen from '../screens/DashboardScreen';
import {Image, StyleSheet} from 'react-native';
import icons from '../assets';
import StoreScreen from '../screens/StoreScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

/* Auth stack navigation container */
export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={TabNavigation} />
        <Stack.Screen
          name="FavouriteListScreen"
          component={FavouriteListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**render bottom tab bar */
function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        unmountOnBlur: true,
      })}
      tabBarOptions={{
        showLabel: false,
        safeAreaInsets: {bottom: true},
        keyboardHidesTabBar: true,
        style: {
          shadowOpacity: 0.8,
          elevation: 20,
          shadowRadius: 8,
          shadowOffset: {
            height: -6,
            width: 0,
          },
          height: 55,
          position: 'absolute',
          borderTopWidth: 1,
          // paddingBottom: deviceInfoModule.hasNotch() ? 15 : 0
        },
      }}
      backBehavior={'initialRoute'}
      lazy={true}>
      <Tab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              routes: [{name: 'HomeScreen', params: undefined}],
            });
            // delete route.params;
          },
        })}
        options={{
          tabBarIcon: () => (
            <Image source={icons.homeIcon} style={styles.bottomTabIconStyle} />
          ),
        }}
      />
      <Tab.Screen
        name={'StoreScreen'}
        component={StoreScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              routes: [{name: 'StoreScreen', params: undefined}],
            });
            // delete route.params;
          },
        })}
        options={{
          tabBarIcon: () => (
            <Image source={icons.storeIcon} style={styles.bottomTabIconStyle} />
          ),
        }}
      />
      <Tab.Screen
        name={'DashboardScreen'}
        component={DashboardScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.dashboardIcon}
              style={styles.bottomTabIconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'CartScreen'}
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <Image source={icons.cartIcon} style={styles.bottomTabIconStyle} />
          ),
        }}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              routes: [{name: 'CartScreen'}],
            });
          },
        })}
      />
      <Tab.Screen
        name={'ProfileScreen'}
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.profileIcon}
              style={styles.bottomTabIconStyle}
            />
          ),
        }}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              routes: [{name: 'ProfileScreen'}],
            });
          },
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabIconStyle: {
    height: 20,
    width: 20,
  },
});
