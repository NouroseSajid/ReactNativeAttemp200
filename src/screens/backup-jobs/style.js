import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../constants/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.PRIMARY,
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
});