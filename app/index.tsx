import { Text, View, TextInput, StyleSheet } from "react-native";
import Buttons from "@/component/buttons";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Index() {
  const [inputValue, setInputValue] = useState("0");
  const [value1, setval1] = useState<string>("");
  const [preval, setprev] = useState<string>("");
  const [operator, setopt] = useState<string>("");
  const [value2, setval2] = useState<string>("");

  function handleValueChange(newValue: string) {
    // Remove commas to check the actual number length
    const plainNumber = newValue;

    // Check if the input exceeds the limit of 12 digits
    if (plainNumber.length <= 12 && parseFloat(plainNumber) <= 999999999999) {
      if (operator) {
        setval2(plainNumber);
      } else {
        setval1(plainNumber);
      }
      if (newValue === "0.") {
        setInputValue(newValue);
      } else if (newValue.endsWith(".")) {
        setInputValue(formatNumberWithCommas(plainNumber) + ".");
      } else {
        setInputValue(formatNumberWithCommas(plainNumber));
      }
    } else {
      // Optional: You can give feedback to the user if they try to input more than the limit
      console.log("Input exceeds the allowed limit of 12 digits.");
    }
  }
  function handleOperator({ opt }: any) {
    if (value1 && !value2) {
      setopt(opt);
      setInputValue("");
    } else if (value1 && value2) {
      let result: string;

      switch (operator) {
        case "+":
          result = String(parseFloat(value1) + parseFloat(value2));
          break;
        case "-":
          result = String(parseFloat(value1) - parseFloat(value2));
          break;
        case "x":
          result = String(parseFloat(value1) * parseFloat(value2));
          break;
        case "÷":
          result =
            parseFloat(value2) === 0
              ? "Error"
              : String(parseFloat(value1) / parseFloat(value2));
          break;
        case "%":
          result =
            parseFloat(value2) === 0
              ? "Error"
              : String(parseFloat(value1) % parseFloat(value2));
          break;
        default:
          result = value1;
          break;
      }

      // Convert the result to a number to compare with the limit
      if (!isNaN(parseFloat(result)) && parseFloat(result) > 999999999999) {
        result = "Number too big"; // Set a limit
      }

      setInputValue(
        result === "Error" || result === "Number too big"
          ? result
          : formatNumberWithCommas(result)
      );
      setprev(
        `${formatNumberWithCommas(value1)} ${operator} ${formatNumberWithCommas(
          value2
        )}`
      );
      setval1(result === "Number too big" ? "" : result);
      setval2("");
      setopt(opt === "=" ? "" : opt);
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
    return length > 6 ? 35 : 45;
  };
  const calculateFontSize2 = (length: number) => {
    return length > 6 ? 25 : 45;
  };

  const formatNumberWithCommas = (number: string) => {
    const parts = number.split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1] ? `.${parts[1]}` : "";
    return integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + decimalPart;
  };

  function handleCDelete() {
    if (operator) {
      if (value2.length > 0) {
        const updatedValue2 = value2.slice(0, -1);
        setval2(updatedValue2);
        setInputValue(
          updatedValue2 ? formatNumberWithCommas(updatedValue2) : "0"
        );
      }
    } else {
      if (value1.length > 0) {
        const updatedValue1 = value1.slice(0, -1);
        setval1(updatedValue1);
        setInputValue(
          updatedValue1 ? formatNumberWithCommas(updatedValue1) : "0"
        );
      }
    }
  }

  return (
    <View style={{ marginTop: hp(14), height: "100%", width: "100%" }}>
      <TextInput
        style={[
          styles.Inputcontainer2,
          { fontSize: calculateFontSize2(inputValue.length) },
        ]}
        value={preval}
        placeholderTextColor="#8A9A5B"
        editable={false}
        multiline={true}
      />
      <TextInput
        style={[
          styles.Inputcontainer,
          { fontSize: calculateFontSize(inputValue.length) },
        ]}
        value={inputValue}
        placeholder="0"
        placeholderTextColor="#8A9A5B"
        editable={false}
        scrollEnabled={true}
        multiline={false}
        textAlign="right"
      />
      <Buttons
        onValueChange={handleValueChange}
        setOperator={handleOperator}
        Clear={handleClear}
        Delete={handleCDelete}
        style={{ height: "55%", width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Inputcontainer: {
    height: hp(12),
    width: "100%",
    textAlign: "right",
    paddingRight: wp(10),
    marginTop: wp(3),
    paddingTop: 10,
    color: "#8A9A5B",
    fontSize: wp(11),
  },
  Inputcontainer2: {
    height: hp(12),
    width: "100%",
    fontSize: wp(7),
    textAlign: "right",
    paddingRight: wp(10),
    paddingTop: wp(9),
    color: "#8A9A5B",
  },
});
