import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import AppIntro from "../components/AppIntro";
import AuthForm from "../components/AuthForm";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = () => {
    router.push({
      pathname: "/Todo/[username]",
      params: { username: username },
    });
  };

  const handleForgotPassword = () => {
    router.push({
      pathname: "/ForgotPassword",
    });
    console.log("Forgot Password clicked");
  };

  const navigateToSignup = () => {
    router.push("/SignUp");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppIntro />
        <AuthForm setUsername={setUsername} setPassword={setPassword} />
        <Text style={styles.forgotPasswordText} onPress={handleForgotPassword}>
          Forgot Password?
        </Text>

        <TouchableOpacity
          style={[
            styles.button,
            (username === "" || password === "") && styles.disabledButton,
          ]}
          disabled={username === "" || password === ""}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", paddingTop: 5 }}>
          New user?
          <Text style={styles.signupText} onPress={navigateToSignup}>
            {" "}
            Sign up here
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
  forgotPasswordText: {
    color: "#3498db",
    marginBottom: 10,
    textDecorationLine: "underline",
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#EB984E",
  },
});

export default Home;
