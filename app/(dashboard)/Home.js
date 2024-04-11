import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import Task from "../../components/Task";
import taskData from "../../data/task.json";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleDateSelection = (day) => {
    setSelectedDate(day.dateString);
  };

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setSelectedDate(currentDate);
  }, []);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    if (selectedDate) {
      const filteredTasks = taskData.filter(
        (task) => task.date === selectedDate
      );
      setTasks(filteredTasks);
    }
  }, [selectedDate]);

  return (
    <View style={{ flex: 1 }}>
      <Calendar
        onDayPress={handleDateSelection}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#e67e22" },
        }}
      />

      <View style={{ marginTop: 15, flex: 1 }}>
        <Text
          style={{ fontSize: 18, fontWeight: "bold", paddingHorizontal: 10 }}
        >
          Tasks
        </Text>

        {tasks.length === 0 ? (
          <Text style={{ paddingHorizontal: 10 }}>
            No tasks for selected date
          </Text>
        ) : (
          <ScrollView style={{ flexGrow: 1, marginTop: 15 }}>
            {tasks.map((task) => (
              <Task
                id={task.id}
                key={task.id}
                title={task.title}
                category={task.category}
                date={task.date}
                onDelete={handleDeleteTask}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Home;
