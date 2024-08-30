import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";

const Buttons = ({ onValueChange, setOperator, Clear }: any) => {
  const [value1, setval1] = useState<number | string>("!");

  function onclick(num: any) {
    num = String(num);
    if (num === "0" && value1 === "!") {
      setval1("0");
      onValueChange("0");
    } else if (num === 0 && value1 === "0") {
      setval1("0");
      onValueChange("0");
    } else if (num !== "0" && value1 === "!") {
      setval1(num);
      onValueChange(num);
    } else if (num !== 0 && value1 === "0") {
      setval1(num);
      onValueChange(num);
    } else {
      num = value1 + num;
      setval1(num);
      onValueChange(num);
    }
  }

  function onclick2(opt: any) {
    if (value1 !== "!") {
      setOperator({ opt: opt, num: value1 });
      setval1("!");
    }
  }
  function onclick3() {
    setval1("!");
    Clear();
  }

  function buttons(num: any) {
    if (num === 0) {
      return [0, "."];
    }
    if (num === "c") {
      return [];
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
          <Pressable style={styles.container2} onPress={() => onclick3()}>
            <Text style={{ color: "white", fontSize: 30 }}>C</Text>
          </Pressable>
          <Pressable style={styles.container2} onPress={() => onclick2("÷")}>
            <FontAwesome6 name="divide" size={24} color="white" />
          </Pressable>
          <Pressable style={styles.container2} onPress={() => onclick2("x")}>
            <Entypo name="cross" size={32} color="white" />
          </Pressable>
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
          <Pressable style={styles.container} onPress={() => onclick2("%")}>
            <Text style={styles.text}>%</Text>
          </Pressable>
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
          <Feather name="delete" size={28} color="white" />
        </Pressable>
        <Pressable style={styles.container2} onPress={() => onclick2("-")}>
          <Text style={styles.text2}>
            <Entypo name="minus" size={32} color="white" />
          </Text>
        </Pressable>
        <Pressable style={styles.container2} onPress={() => onclick2("+")}>
          <Text style={styles.text2}>
            <Entypo name="plus" size={32} color="white" />
          </Text>
        </Pressable>
        <Pressable style={styles.container3} onPress={() => onclick2("=")}>
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
