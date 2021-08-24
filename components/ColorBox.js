import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ColorBox({ text, color }) {
  return (
    <View style={[styles.box, { backgroundColor: color }]}>
      <Text style={styles.boxText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
