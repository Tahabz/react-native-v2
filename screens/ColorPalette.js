import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

export default function ColorPalette({ route }) {
  const colors = route.params.colors;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      renderItem={({ item }) => (
        <ColorBox text={item.colorName} color={item.hexCode} />
      )}
      keyExtractor={(item) => item.hexCode}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingBottom: 120,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
});
