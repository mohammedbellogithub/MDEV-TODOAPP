import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const AddTodo = ({ onSave, onCancel }) => {
  const task = useLocalSearchParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setdate] = useState("");
  const [isDetailsView, setIsDetailsView] = useState(false);

  useEffect(() => {
    if (task.id !== "") {
      setIsDetailsView(true);
      setCategory(task.category);
      setdate(task.date);
      setTitle(task.title);
    }
  }, [task]);

  const handleSave = () => {
    onSave({ title, category, date });
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitleText}>
          {isDetailsView ? "Edit Task" : "Add Task"}
        </Text>
      </View>
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
        value={date}
        onChangeText={setdate}
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
  sectionHeader: {
    alignSelf: "center",
  },
  sectionTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
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
