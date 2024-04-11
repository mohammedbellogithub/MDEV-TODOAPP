import { Text, View } from "react-native";
import React, { Component } from "react";
import { AntDesign, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";

export default function Dashboard() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Todo"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="pen-to-square" size={size} color={color} />
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
