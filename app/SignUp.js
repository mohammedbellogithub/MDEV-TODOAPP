import React, { useState } from "react";
import { useRouter } from "expo-router";
import AuthForm from "../components/AuthForm";
import AppIntro from "../components/AppIntro";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppIntro />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#dcdcdc"
          onChangeText={(text) => setEmail(text)}
        />
        <AuthForm setUsername={setUsername} setPassword={setPassword} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.back();
          }}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", paddingTop: 5 }}>
          Already have an account?{" "}
          <Text
            style={styles.signupText}
            onPress={() => {
              router.back();
            }}
          >
            Sign in here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 30,
  },

  input: {
    height: 50,
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    width: "80%",
    fontSize: 16,
    color: "#ecf0f1",
    borderColor: "#ecf0f1",
  },
  button: {
    backgroundColor: "#e67e22",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  signupText: {
    color: "#3498db",
    marginTop: 10,
    textDecorationLine: "underline",
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUp;
