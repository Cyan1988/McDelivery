import { StyleSheet, View, Image, Dimensions } from "react-native";
import React from "react";

const { width: windowWidth } = Dimensions.get("screen");
const imgHeight = windowWidth * 0.622;

const MenuCarouselItem = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="contain" style={styles.image} />
    </View>
  );
};

export default MenuCarouselItem;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
  image: {
    width: "100%",
    height: imgHeight,
  },
});
