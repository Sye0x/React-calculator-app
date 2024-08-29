import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";

const Buttons = ({ onValueChange }: any) => {
  const [value1, setval1] = useState();
  const [value2, setva21] = useState();

  function onclick(num: any) {
    if (num === "C") {
      num = "0";
      setval1(num);
    } else {
      if (value1 !== "0" && value1 !== 0) {
        num = value1 + num;
      }
      setval1(num);
    }
    onValueChange(num);
  }

  function buttons(num: any) {
    if (num === 0) {
      return ["%", 0, "."];
    }
    if (num === "c") {
      return [
        "C",
        <FontAwesome6 name="divide" size={24} color="white" />,
        <Entypo name="cross" size={32} color="white" />,
      ];
    }
    let arr = [];

    for (let i = 0; i < 3; i++) {
      let x = String(num + i);
      arr.push(x);
    }

    return arr;
  }

  return (
    <View style={{ flexDirection: "row", marginTop: 1, marginHorizontal: 15 }}>
      <View>
        <View style={{ flexDirection: "row" }}>
          {buttons("c").map((number, index) => (
            <Pressable
              style={styles.container2}
              onPress={() => onclick(number)}
            >
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
            <Pressable style={styles.container} onPress={() => onclick(number)}>
              <Text style={styles.text} key={index}>
                {number}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          {buttons(4).map((number, index) => (
            <Pressable style={styles.container} onPress={() => onclick(number)}>
              <Text style={styles.text} key={index}>
                {number}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          {buttons(1).map((number, index) => (
            <Pressable style={styles.container} onPress={() => onclick(number)}>
              <Text style={styles.text} key={index}>
                {number}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={{ flexDirection: "row" }}>
          {buttons(0).map((number, index) => (
            <Pressable style={styles.container} onPress={() => onclick(number)}>
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
          <Text style={styles.text2}>
            <Entypo name="minus" size={32} color="white" />
          </Text>
        </Pressable>
        <Pressable style={styles.container2}>
          <Text style={styles.text2}>
            <Entypo name="plus" size={32} color="white" />
          </Text>
        </Pressable>
        <Pressable style={styles.container3}>
          <Text style={styles.text2}>
            <FontAwesome6 name="equals" size={26} color="white" />
          </Text>
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
    height: 75,
    width: 75,
    borderRadius: 40,
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
    height: 75,
    width: 75,
    borderRadius: 40,
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
    height: 175,
    width: 75,
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
