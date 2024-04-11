import React, { useState, useEffect } from "react";
import { useLocation } from "expo-router";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const AddTodo = ({ task, onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setCategory(task.category);
      setDueDate(task.dueDate);
    }
  }, [task]);

  const handleSave = () => {
    onSave({ title, category, dueDate });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task title"
      />
      <Text style={styles.label}>Category:</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Enter task category"
      />
      <Text style={styles.label}>Due Date:</Text>
      <TextInput
        style={styles.input}
        value={dueDate}
        onChangeText={setDueDate}
        placeholder="Enter due date"
      />
      <View style={styles.buttonsContainer}>
        <Button title="Save" onPress={handleSave} />
        <Button title="Cancel" onPress={onCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AddTodo;
