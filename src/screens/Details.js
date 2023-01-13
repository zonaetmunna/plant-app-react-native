import { StyleSheet, Text, Linking, View, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/header/Header";

export default function Details({ route }) {
  const { name } = route.params.planet;
  return (
    <SafeAreaView>
      <View>
        <Header backbtn={true} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
