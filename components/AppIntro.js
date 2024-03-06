// components/Header.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AppIntro = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={[styles.letter, styles.letterT]}>T</Text>
      <Text style={[styles.letter, styles.letterO]}>O</Text>
      <Text style={[styles.letter, styles.letterD]}>D</Text>
      <Text style={[styles.letter, styles.letterO]}>O</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  letter: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  letterT: {
    color: "#e67e22",
  },
  letterO: {
    color: "white",
  },
  letterD: {
    color: "#e67e22",
  },
});

export default AppIntro;
