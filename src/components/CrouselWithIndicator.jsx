import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

const CarouselWithIndicator = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselItems = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
    { title: 'Item 4' },
  ];

  const renderCarouselItem = ({ item, index }) => {
    return (
      <View style={styles.carouselItem}>
        <Text style={styles.carouselText}>{item.title}</Text>
      </View>
    );
  };

  CarouselWithIndicator.propTypes = {
    // Define PropTypes here if needed
  };
  

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={carouselItems}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        renderItem={renderCarouselItem}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  carouselItem: {
    width: '100%',
    height: 200, // Customize as per your requirement
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc', // Just for demonstration
  },
  carouselText: {
    fontSize: 24,
    color: '#000', // Customize as per your requirement
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000', // Customize as per your requirement
  },
});

export default CarouselWithIndicator;
