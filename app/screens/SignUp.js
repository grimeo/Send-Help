import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.inputfields}>
        <TextInput style={styles.input} placeholder="First Name"></TextInput>
        <TextInput style={styles.input} placeholder="Last Name"></TextInput>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <TextInput style={styles.input} placeholder="Username"></TextInput>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        ></TextInput>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm Password"
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
    height: 500,
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
    backgroundColor: " #24a0ed",
    borderRadius: 5,
    padding: 10,
    margin: 20,
    alignSelf: "center",
  },
  submitBtnText: { fontSize: 20, textAlign: "center" },
  title: {
    width: "95%",
    backgroundColor: "dodgerblue",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
});
