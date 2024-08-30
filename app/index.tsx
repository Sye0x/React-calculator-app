import { Text, View, TextInput, StyleSheet } from "react-native";
import Buttons from "@/component/buttons";
import React, { useState } from "react";

export default function Index() {
  const [inputValue, setInputValue] = useState("0");
  const [value1, setval1] = useState<string>("");
  const [preval, setprev] = useState<string>("");
  const [operator, setopt] = useState<string>("");
  const [value2, setval2] = useState<string>("");

  function handleValueChange(newValue: any) {
    let element = "";
    let k = 1;
    let j = newValue.length - 1;
    for (let i = newValue.length - 1; i > -1; i--) {
      if (k % 3 === 0 && i !== 0) {
        element = newValue[i] + element;
        element = "," + element;
      } else {
        element = newValue[i] + element;
      }
      k += 1;
    }
    if (newValue.length === 1) {
      element = newValue;
    }
    setInputValue(element);
    if (operator) {
      setval2(newValue);
    } else {
      setval1(newValue);
    }
  }

  function handleOperator({ opt, num }: any) {
    console.log("Operator:", opt);

    if (value1 && !value2) {
      setopt(opt);
      setInputValue("");
    } else if (value1 && value2) {
      let result: string;

      switch (operator) {
        case "+":
          result = String(parseInt(value1, 10) + parseInt(value2, 10));
          break;
        case "-":
          result = String(parseInt(value1, 10) - parseInt(value2, 10));
          break;
        case "x":
          result = String(parseInt(value1, 10) * parseInt(value2, 10));
          break;
        case "÷":
          if (parseInt(value2, 10) === 0) {
            result = "Error";
          } else {
            result = String(parseInt(value1, 10) / parseInt(value2, 10));
          }
          break;
        case "%":
          if (parseInt(value2, 10) === 0) {
            result = "Error";
          } else {
            result = String(parseInt(value1, 10) % parseInt(value2, 10));
          }
          break;
        default:
          result = value1;
          break;
      }

      let element = "";
      let k = 1;
      let j = result.length - 1;
      for (let i = result.length - 1; i > -1; i--) {
        if (k % 3 === 0 && i !== 0) {
          element = result[i] + element;
          element = "," + element;
        } else {
          element = result[i] + element;
        }
        k += 1;
      }

      if (result === "Error") {
        element = "ERROR";
      }

      setInputValue(element);
      setprev(value1 + " " + operator + " " + value2);
      setval1(result);

      setval2("");
      setopt(opt === "=" ? "" : opt); // Clear operator if "=" is pressed
    }
  }
  function handleClear() {
    setval1("");
    setval2("");
    setopt("");
    setprev("");
    setInputValue("");
  }

  const calculateFontSize = (length: number) => {
    if (length > 6) {
      return 35;
    } else {
      return 45;
    }
  };

  return (
    <View style={{ marginTop: 68 }}>
      <TextInput
        style={styles.Inputcontainer2}
        value={preval}
        placeholderTextColor="#8A9A5B"
        editable={false}
      />
      <TextInput
        style={[
          styles.Inputcontainer,
          { fontSize: calculateFontSize(inputValue.length) },
        ]}
        value={inputValue}
        placeholder="0"
        placeholderTextColor="#8A9A5B"
        editable={false} // Disable editing directly for demonstration
      />
      <Buttons
        onValueChange={handleValueChange}
        setOperator={handleOperator} // Pass handleOperator as a prop
        Clear={handleClear}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Inputcontainer: {
    height: "10%",
    width: "100%",

    textAlign: "right",
    paddingHorizontal: 30,
    marginTop: 15,
    paddingTop: 10,
    color: "#8A9A5B",
  },
  Inputcontainer2: {
    height: "10%",
    width: "100%",
    fontSize: 35,
    textAlign: "right",
    paddingHorizontal: 36,
    marginTop: 140,
    paddingTop: 5,
    color: "#888888",
  },
});
