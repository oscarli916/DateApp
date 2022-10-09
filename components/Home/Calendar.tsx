import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Calendar = () => {
  return (
    <View
      style={{ marginTop: 50, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity>
        <View
          style={{
            borderRadius: 15,
            borderWidth: 3,
            height: 100,
            width: 200,
          }}
        >
          <Text>120 Days!</Text>
          <Text>(4 months and 0 days)</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
