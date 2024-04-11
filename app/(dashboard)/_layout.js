import { Text, View } from "react-native";
import React, { Component } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";

export default function Dashboard() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddTodo"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
