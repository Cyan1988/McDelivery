import { View, FlatList, Animated, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import MenuCarouselItem from "./MenuCarouselItem";
import Pagination from "./Pagination";

const images: Array<any> = [
  { img: require("../../../assets/img/carousel/Mc_01.jpg") },
  { img: require("../../../assets/img/carousel/Mc_02.jpg") },
  { img: require("../../../assets/img/carousel/Mc_03.jpg") },
];

const { width: windowWidth } = Dimensions.get("screen");

const MenuCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const ref: any = useRef(null);

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

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index !== images.length) {
        ref.current.scrollToIndex({ index: index++ });
      } else {
        ref.current.scrollToIndex({ index: 0 });
        index = 0;
      }
    }, 4000);
    return () => clearInterval(timer);
  });

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => <MenuCarouselItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        ref={ref}
      />
      <Pagination data={images} scrollX={scrollX} />
    </View>
  );
};

export default MenuCarousel;
