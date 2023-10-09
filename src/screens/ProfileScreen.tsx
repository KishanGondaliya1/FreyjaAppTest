import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {whiteColor} from '../utils/Colors';

type NavigationProps = {
  navigation: any;
};

const ProfileScreen: React.FC<NavigationProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
