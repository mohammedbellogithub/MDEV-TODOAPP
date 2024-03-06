import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

const UserHome = () => {
  const params = useLocalSearchParams();
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleAddTodo = () => {
    if (todoInput.trim() !== "") {
      if (editingTodo) {
        // Edit existing todo
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === editingTodo.id ? { ...todo, text: todoInput } : todo
          )
        );
        setEditingTodo(null);
      } else {
        // Add new todo
        setTodos([...todos, { id: todos.length.toString(), text: todoInput }]);
      }
      setTodoInput("");
    }
  };

  const handleEditTodo = (item) => {
    setTodoInput(item.text);
    setEditingTodo(item);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.text}</Text>
      <TouchableOpacity onPress={() => handleEditTodo(item)}>
        <Text style={styles.editButton}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `welcome ${params.username}`,
          headerStyle: { backgroundColor: "#e67e22" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your todo"
        placeholderTextColor="#dcdcdc"
        onChangeText={(text) => setTodoInput(text)}
        value={todoInput}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>{editingTodo ? "Edit" : "Add"}</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.todoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  input: {
    height: 50,
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    width: "80%",
    fontSize: 16,
    color: "#333",
    borderColor: "#333",
  },
  addButton: {
    backgroundColor: "#e67e22",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  todoList: {
    width: "80%",
    marginTop: 20,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  todoText: {
    color: "#fff",
    fontSize: 16,
  },
  editButton: {
    color: "#2ecc71",
    fontSize: 16,
    marginRight: 10,
  },
  deleteButton: {
    color: "#e74c3c",
    fontSize: 16,
  },
});

export default UserHome;
