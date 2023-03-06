import { StyleSheet, View, Animated, Dimensions } from "react-native";
import React from "react";

const { width: windowWidth } = Dimensions.get("screen");

const Pagination = ({ data, scrollX }: any) => {
  return (
    <View style={styles.container}>
      {data.map((images: any, index: number) => {
        const inputRange = [
          windowWidth * (index - 1),
          windowWidth * index,
          windowWidth * (index + 1),
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 16, 8],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot, { width: dotWidth }]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    bottom: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 6,
    marginHorizontal: 4,
    backgroundColor: "#ccc",
  },
});
