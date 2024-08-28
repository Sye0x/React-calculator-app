import { View, Text, StyleSheet, TextInput } from "react-native";

import React from "react";

const Textarea = () => {
  return (
    <View style={{ marginTop: 100 }}>
      <TextInput style={styles.container} placeholder="0" />
    </View>
  );
};

export default Textarea;

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 85,
  },
});
