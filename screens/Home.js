import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import PalettePreview from '../components/PalettePreview';

export default function Home({ navigation }) {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getColors = useCallback(async () => {
    const res = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    const palettesRes = await res.json();
    if (res.ok) {
      setPalettes(palettesRes);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await getColors();
    setIsRefreshing(false);
  }, [getColors]);

  useEffect(() => {
    getColors();
  }, [getColors]);

  return (
    <FlatList
      keyExtractor={(item) => item.paletteName}
      data={palettes}
      renderItem={({ item }) => (
        <PalettePreview
          colors={item.colors}
          paletteName={item.paletteName}
          onPress={() => {
            navigation.navigate('ColorPalette', item);
          }}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
}
