import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../Text/Text";
import { spacing } from "../../thems/spacing";
import { colors } from "../../thems/color";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text preset="h2">THE PLANET</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: spacing[3],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
  },
});
