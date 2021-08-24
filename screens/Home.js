import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { RAINBOW, FRONTEND_MASTERS, SOLARIZED } from '../data/colors';

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

export default function Home({ navigation }) {
  const [palettes, setPalettes] = useState([]);

  const getColors = useCallback(async () => {
    const res = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    const palettesRes = await res.json();
    if (res.ok) {
      setPalettes(palettesRes);
    }
  }, []);

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
    />
  );
}
