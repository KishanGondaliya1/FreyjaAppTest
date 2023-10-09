import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {whiteColor} from '../utils/Colors';

type NavigationProps = {
  navigation: any;
};

const CartScreen: React.FC<NavigationProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Cart Screen</Text>
      </View>
    </SafeAreaView>
  );
};
export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
