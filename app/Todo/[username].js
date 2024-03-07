import React, { useState } from "react";
import { useLocalSearchParams, Stack } from "expo-router";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import Task from "../../components/Task";

export default function UserHome() {
  const params = useLocalSearchParams();
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  function isNullOrWhitespace(input) {
    return input === null || input === undefined || /^\s*$/.test(input);
  }
  const handleAddTask = () => {
    console.log(`hey from task --> ${Platform.OS}`);
    if (!isNullOrWhitespace(task)) {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `welcome ${params.username}`,
        }}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tasksContainer}>
          <Text style={styles.sectionTitle}>Add tasks</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        style={styles.addTaskKeyword}
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity
          disabled={isNullOrWhitespace(task)}
          onPress={() => handleAddTask()}
        >
          <View
            style={[
              styles.addBtnContainer,
              isNullOrWhitespace(task) && styles.disabledButton,
            ]}
          >
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  tasksContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  addTaskKeyword: {
    flex: 1,
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addBtnContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#e67e22",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  disabledButton: {
    backgroundColor: "#EB984E",
  },
  addText: {},
});
