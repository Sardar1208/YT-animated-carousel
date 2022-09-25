import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import Carousel from "./Components/Carousel";

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
});
