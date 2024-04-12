import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { AntDesign, Entypo } from "@expo/vector-icons";

const index = () => {
  const router = useRouter();

  const navigateToWelcome = () => {
    router.push("/Welcome");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/welcome.png")} />
      </View>
      <TouchableOpacity
        onPress={navigateToWelcome}
        style={styles.arrowContainer}
      >
        <AntDesign style={styles.arrowRight} name="arrowright" />
      </TouchableOpacity>
      <View style={styles.welcomeSection}>
        <View style={styles.logoAndText}>
          <Image source={require("../assets/applogo.png")} />
          <Text style={styles.appText}>TODO</Text>
        </View>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Entypo name="dot-single" style={styles.bulletIcon} />
        <Entypo name="dot-single" style={styles.bulletInActiveIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#C77726",
  },
  arrowContainer: {
    borderRadius: 20,
    backgroundColor: "white",
  },
  arrowRight: {
    fontSize: 24,
    padding: 10,
    color: "black",
  },
  imageContainer: {
    flexDirection: "column",
    width: "100%",
    height: "60%",
    justifyContent: "center",
  },
  logoAndText: {
    flexDirection: "row",
    alignContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  appText: {
    fontSize: 30,
    color: "white",
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: 30,
    color: "white",
    alignSelf: "center",
  },
  bulletContainer: {
    paddingTop: 5,
    flexDirection: "row",
  },
  bulletInActiveIcon: {
    fontSize: 30,
    color: "white",
  },
  bulletIcon: {
    fontSize: 30,
    color: "black",
  },
});

export default index;
