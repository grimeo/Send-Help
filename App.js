import React from "react";
import { Platform, StyleSheet, StatusBar, View } from "react-native";
import SignUp from "./app/screens/SignUp";

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
});
