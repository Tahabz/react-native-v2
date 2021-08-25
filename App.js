import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';
import Modal from './screens/Modal';

const mainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStack = () => {
  return (
    <mainStack.Navigator>
      <mainStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'My Home' }}
      />
      <mainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </mainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen
          name="Main"
          component={MainStack}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Modal" component={Modal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
