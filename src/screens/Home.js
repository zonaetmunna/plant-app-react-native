import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";
import { spacing } from "../thems/spacing";
import { StatusBar } from "expo-status-bar";
import Header from "../components/header/Header";
import { PLANET_LIST } from "../data/planetList";
import { colors } from "../thems/color";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  // flatlist render item
  const renderItem = ({ item }) => {
    const { name } = item;
    return (
      <Pressable
        onPress={() => navigation.navigate("Details", { planet: item })}
        style={styles.item}
      >
        <View style={{ flexDirection: row, alignItems: center }}>
          <View style={[styles.circle, { backgroundColor: colors }]} />
          <Text preset="small">{name}</Text>
        </View>
        <AntDesign name="right" size={18} color="white" />
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <FlatList
          contentContainerStyle={styles.list}
          data={PLANET_LIST}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: spacing[5],
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
});
