import { StyleSheet, Text, View, StatusBar } from "react-native";
import { colors } from "./src/thems/color";
import { useFonts } from "expo-font";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  // expo font
  const [loaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Black.ttf"),
    Antonio: require("./assets/fonts/Antonio-VariableFont_wght.ttf"),
  });

  if (!loaded) {
    return <Text>loading...</Text>;
  }

  //react navigation stack
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar styles="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
});
