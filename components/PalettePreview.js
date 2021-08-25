import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PalettePreview({ colors, paletteName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>{paletteName}</Text>
      <FlatList
        style={styles.container}
        data={colors.slice(0, 5)}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
        horizontal={true}
        keyExtractor={(item) => item.colorName}
        ListHeaderComponent={
          <TouchableOpacity>
            <Text>hey</Text>
          </TouchableOpacity>
        }
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
  },
  box: {
    padding: 20,
    margin: 2,
    elevation: 2,
  },
});
