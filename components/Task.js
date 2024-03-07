import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.taskItemLeft}>
        <View style={styles.bullet}></View>
        <Text style={styles.taskItemText}>{props.text}</Text>
      </View>
      <View style={styles.minus}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  taskItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  taskItemText: {
    maxWidth: "80%",
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#e67e22",
  },
  minus: {
    width: 20,
    height: 5,
    backgroundColor: "#e67e22",
    marginLeft: 10,
  },
});

export default Task;
