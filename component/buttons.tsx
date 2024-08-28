import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
const Buttons = () => {
  function buttons(num: any) {
    if (num === 0) {
      return ["%", 0, "."];
    }
    if (num === "c") {
      return ["C", "÷", "X"];
    }
    let arr = [];

    for (let i = 0; i < 3; i++) {
      arr.push(num + i);
    }

    return arr;
  }

  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <View>
        <View style={{ flexDirection: "row" }}>
          {buttons("c").map((number, index) => (
            <Pressable style={styles.container2}>
              <Text
                style={{ fontSize: 22, fontWeight: "600", color: "white" }}
                key={index}
              >
                {number}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          {buttons(7).map((number, index) => (
            <Pressable style={styles.container}>
              <Text style={styles.text} key={index}>
                {number}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          {buttons(4).map((number, index) => (
            <Pressable style={styles.container}>
              <Text style={styles.text} key={index}>
                {number}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          {buttons(1).map((number, index) => (
            <Pressable style={styles.container}>
              <Text style={styles.text} key={index}>
                {number}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={{ flexDirection: "row" }}>
          {buttons(0).map((number, index) => (
            <Pressable style={styles.container}>
              <Text style={styles.text} key={index}>
                {number}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View>
        <Pressable style={styles.container2}>
          <Feather name="delete" size={24} color="white" />
        </Pressable>
        <Pressable style={styles.container2}>
          <Text style={styles.text2}>-</Text>
        </Pressable>
        <Pressable style={styles.container2}>
          <Text style={styles.text2}>+</Text>
        </Pressable>
        <Pressable style={styles.container3}>
          <Text style={styles.text2}>=</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    margin: 10,

    backgroundColor: "#FAF9F6",
    padding: 10,
    height: 90,
    width: 90,
    borderRadius: 45,
    shadowColor: "#333333",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    margin: 10,

    backgroundColor: "#8A9A5B",
    padding: 10,
    height: 90,
    width: 90,
    borderRadius: 45,
    shadowColor: "#333333",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container3: {
    margin: 10,

    backgroundColor: "#8A9A5B",
    padding: 10,
    height: 200,
    width: 90,
    borderRadius: 45,
    shadowColor: "#333333",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
  },
  text2: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },
});
