import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Buttons = ({ onValueChange, setOperator, Clear, Delete }: any) => {
  const [value1, setval1] = useState<string>("!");
  const [decimal, setdeciaml] = useState<string>("!");

  function onclickdelete() {
    Delete();
    setval1(value1.slice(0, -1));
  }

  function onclick(num: any) {
    num = String(num);
    let x = value1;

    // Allow maximum of 15 characters including decimal point
    if (x.length < 13) {
      if (num === ".") {
        if (decimal === "!") {
          // If decimal hasn't been added yet
          const updatedValue = value1 === "!" ? "0." : value1 + ".";
          setval1(updatedValue);
          onValueChange(updatedValue);
          console.log(updatedValue);
          setdeciaml("."); // Mark that a decimal has been added
        }
      } else if (num === "0" && value1 === "!") {
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
  }

  function onclick2(opt: any) {
    if (value1 !== "!") {
      setOperator({ opt: opt, num: value1 });
      setval1("!");
      setdeciaml("!");
    }
  }
  function onclick3() {
    setval1("!");
    setdeciaml("!");
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
    <View
      style={{
        flexDirection: "row",
        marginTop: 1,
        marginHorizontal: wp(4),
      }}
    >
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
        <Pressable style={styles.container2} onPress={() => onclickdelete()}>
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
    marginVertical: wp(2),
    marginHorizontal: wp(1.5),
    backgroundColor: "#FAF9F6",
    padding: 10,
    height: wp(20),
    width: wp(20),
    borderRadius: wp(50),
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
    marginVertical: wp(2),
    marginHorizontal: wp(1.5),
    backgroundColor: "#8A9A5B",
    padding: 10,
    height: wp(20),
    width: wp(20),
    borderRadius: wp(50),
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
    marginVertical: wp(2),
    marginHorizontal: wp(1.5),
    backgroundColor: "#8A9A5B",
    padding: 10,
    height: wp(44),
    width: wp(20),
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
