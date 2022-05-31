import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/thems/color';
import { spacing } from './src/thems/spacing';
import { useFonts } from 'expo-font';
import { typography } from './src/thems/typograpy';

export default function App() {
  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Black.ttf'),
    Antonio: require('./assets/fonts/Antonio-VariableFont_wght.ttf')
  });

  if (!loaded) {
    return <Text>loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text preset="h1">Open up App.js to start working on your app!</Text>
      <Text style={{marginTop:spacing[2]}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
