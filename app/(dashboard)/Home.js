import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";

import { View, Text, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import Task from "../../components/Task";
import taskData from "../../data/task.json";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setSelectedDate(currentDate);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const filteredTasks = taskData.filter(
        (task) => task.duedate === selectedDate
      );
      setTasks(filteredTasks);
    }
  }, [selectedDate, taskData]);

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerBackVisible: false,
        }}
      />
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "red" },
        }}
      />

      <View style={{ marginTop: 15, flex: 1 }}>
        <Text
          style={{ fontSize: 18, fontWeight: "bold", paddingHorizontal: 10 }}
        >
          Tasks
        </Text>

        <ScrollView style={{ flexGrow: 1, marginTop: 15 }}>
          {tasks.map((transaction) => (
            <Task
              key={transaction.id}
              title={transaction.title}
              category={transaction.category}
              date={transaction.duedate}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
