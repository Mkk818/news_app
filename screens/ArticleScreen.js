import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { WebView } from 'react-native-webview';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'https://expo.dev' }} />
    </SafeAreaView> // {styles.container}>
  );
};
