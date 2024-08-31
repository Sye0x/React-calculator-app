import { Text, View, TextInput, StyleSheet } from "react-native";
import Buttons from "@/component/buttons";
import React, { useState } from "react";

export default function Index() {
  // State to store the current input value displayed on the calculator screen
  const [inputValue, setInputValue] = useState("0");

  // State to store the first operand in the calculation
  const [value1, setval1] = useState<string>("");

  // State to store the previous calculation (for display above the current input)
  const [preval, setprev] = useState<string>("");

  // State to store the current operator (+, -, x, ÷, etc.)
  const [operator, setopt] = useState<string>("");

  // State to store the second operand in the calculation
  const [value2, setval2] = useState<string>("");

  // Function to handle input changes (numbers and decimals)
  function handleValueChange(newValue: string) {
    // If an operator is selected, update the second operand
    if (operator) {
      setval2(newValue);
    } else {
      // Otherwise, update the first operand
      setval1(newValue);
    }

    // Format the input value with commas for better readability
    setInputValue(formatNumberWithCommas(newValue));
  }

  // Function to handle operator buttons (+, -, x, ÷, etc.)
  function handleOperator({ opt }: any) {
    console.log("Operator:", opt);

    // If the first operand is set and the second operand is not, store the operator and reset the input field
    if (value1 && !value2) {
      setopt(opt);
      setInputValue("");
    }
    // If both operands are set, perform the calculation
    else if (value1 && value2) {
      let result: string;

      // Perform the calculation based on the operator
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
          if (parseFloat(value2) === 0) {
            result = "Error"; // Handle division by zero
          } else {
            result = String(parseFloat(value1) / parseFloat(value2));
          }
          break;
        case "%":
          if (parseFloat(value2) === 0) {
            result = "Error"; // Handle modulus by zero
          } else {
            result = String(parseFloat(value1) % parseFloat(value2));
          }
          break;
        default:
          result = value1;
          break;
      }

      // Format the result and update the display
      setInputValue(
        result === "Error" ? "Error" : formatNumberWithCommas(result)
      );
      setprev(
        `${formatNumberWithCommas(value1)} ${operator} ${formatNumberWithCommas(
          value2
        )}`
      );
      setval1(result); // Store the result as the first operand for further calculations
      setval2(""); // Clear the second operand
      setopt(opt === "=" ? "" : opt); // Clear operator if "=" is pressed, otherwise set the new operator
    }
  }

  // Function to clear all states and reset the calculator
  function handleClear() {
    setval1("");
    setval2("");
    setopt("");
    setprev("");
    setInputValue("");
  }

  // Function to adjust font size based on the length of the input
  const calculateFontSize = (length: number) => {
    return length > 6 ? 35 : 45;
  };

  // Function to format a number with commas for thousands
  const formatNumberWithCommas = (number: string) => {
    const parts = number.split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1] ? `.${parts[1]}` : "";

    // Add commas to the integer part of the number
    return integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + decimalPart;
  };

  return (
    <View style={{ marginTop: 68 }}>
      {/* Display the previous calculation (above the current input) */}
      <TextInput
        style={styles.Inputcontainer2}
        value={preval}
        placeholderTextColor="#8A9A5B"
        editable={false}
      />
      {/* Display the current input value */}
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
      {/* Custom buttons component to handle input and operators */}
      <Buttons
        onValueChange={handleValueChange}
        setOperator={handleOperator} // Pass handleOperator as a prop
        Clear={handleClear}
      />
    </View>
  );
}

// Styles for the input containers
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
