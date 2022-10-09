import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="account-supervisor-outline"
          size={36}
          color="#f44336"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="settings-outline"
          size={36}
          color="#2196f3"
          style={{ marginLeft: 10, marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
