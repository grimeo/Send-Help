import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputfields}>
        <TextInput style={styles.input} placeholder="Username"></TextInput>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    width: "90%",
    fontSize: 18,
    padding: 5,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
  },
  inputfields: {
    width: "90%",
    height: 200,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  submitBtn: {
    width: 150,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    padding: 10,
    margin: 20,
    alignSelf: "center",
  },
  submitBtnText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  title: {
    width: "95%",
    backgroundColor: "dodgerblue",
    fontWeight: 800,
    color: "white",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
});
