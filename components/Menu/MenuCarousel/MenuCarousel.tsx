import { View, FlatList, Animated } from "react-native";
import React, { useRef } from "react";
import MenuCarouselItem from "./MenuCarouselItem";
import Pagination from "./Pagination";

const images: Array<any> = [
  { img: require("../../../assets/img/carousel/Mc_01.jpg") },
  { img: require("../../../assets/img/carousel/Mc_02.jpg") },
  { img: require("../../../assets/img/carousel/Mc_03.jpg") },
];

const MenuCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (e: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      { useNativeDriver: false }
    )(e);
  };
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => <MenuCarouselItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
      />
      <Pagination data={images} scrollX={scrollX} />
    </View>
  );
};

export default MenuCarousel;
