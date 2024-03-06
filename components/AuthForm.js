import React from "react";
import { TextInput, StyleSheet } from "react-native";
const AuthForm = ({ setUsername, setPassword }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        placeholderTextColor="#dcdcdc"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#dcdcdc"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
    </>
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
});

export default AuthForm;
