import { SafeAreaView } from "react-native";
import React from "react";
import Calendar from "../components/Home/Calendar";
import Header from "../components/Home/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <Calendar />
    </SafeAreaView>
  );
};

export default HomeScreen;
