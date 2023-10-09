import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {whiteColor} from '../utils/Colors';

type NavigationProps = {
  navigation: any;
};

const StoreScreen: React.FC<NavigationProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Store Screen</Text>
      </View>
    </SafeAreaView>
  );
};
export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
