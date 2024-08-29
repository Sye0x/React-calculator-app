import { Text, View, TextInput, StyleSheet } from "react-native";
import Buttons from "@/component/buttons";
import React, { useState } from "react";

export default function Index() {
  const [inputValue, setInputValue] = useState("0");

  function handleValueChange(newValue: any) {
    setInputValue(newValue);
  }

  return (
    <View style={{ marginTop: 18 }}>
      <TextInput
        style={styles.Inputcontainer}
        value={inputValue}
        placeholder="0"
        placeholderTextColor="#8A9A5B"
        editable={false} // Disable editing directly for demonstration
      />
      <Buttons onValueChange={handleValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  Inputcontainer: {
    height: "20%",
    width: "100%",
    fontSize: 45,
    textAlign: "right",
    paddingHorizontal: 50,
    marginTop: 170,
    paddingTop: 90,
    color: "#8A9A5B",
  },
});
