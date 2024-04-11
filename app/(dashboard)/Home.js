import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";

import { View, Text, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import Task from "../../components/Task";
// import transactionsData from "../../Data/transactionsData.json";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState("");
  // const [transactions, setTransactions] = useState([]);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  // useEffect(() => {
  //   const currentDate = new Date().toISOString().split("T")[0];
  //   setSelectedDate(currentDate);
  // }, []);

  // useEffect(() => {
  //   if (selectedDate) {
  //     const filteredTransactions = transactionsData.filter(
  //       (transaction) => transaction.date === selectedDate
  //     );
  //     setTransactions(filteredTransactions);
  //   }
  // }, [selectedDate, transactionsData]);

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
          {/* {transactions.map((transaction) => ( */}
          <Task
            key={transaction.id}
            title={transaction.title}
            category={transaction.category}
            amount={transaction.amount}
            date={transaction.date}
          />
          {/* ))} */}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
