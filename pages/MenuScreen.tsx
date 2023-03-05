import React from "react";
import { ScrollView } from "react-native";
import MenuCarousel from "../components/Menu/MenuCarousel";

export default function MenuScreen() {
  return (
    <ScrollView>
      <MenuCarousel />
    </ScrollView>
  );
}
