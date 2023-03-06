import React, { useEffect, useRef, useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, Dimensions, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import * as Colors from '../styles/Colors';
import { Text } from '.';
const { width } = Dimensions.get('screen');

export default function RestCarousel({ }) {
    const _sliderRef = useRef(null);
    const [slider, setSlider] = useState([]);
    const [sliderActiveSlide, setSliderActiveSlide] = useState(0);

    const items = [
        {
            image: require('../assets/images/Scene1.png'),
            title1: 'رفع مستوى التركيز للطفل،',
            title2: 'والمساهمة بتطوير خياله.',
        },

        {
            image: require('../assets/images/Scene2.png'),
            title1: 'إغناء الثروة اللغوية للطفل.',
            title2: '',
        },

        {
            image: require('../assets/images/Scene3.png'),
            title1: 'دغدغة الثقافات الثلاثة الضرورية لتطور الطفل.',
            title2: '(الحسية، العقلية، الاتصالية)',

        },
    ]

    useEffect(() => {
        setSlider(items);
    }, []);
    const _renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View
                style={{
                    height: width * .85,
                    paddingBottom: 20,
                    paddingHorizontal: 30,
                    justifyContent: 'flex-end',
                    zIndex: 20,
                }}>
            </View>
        );
    };

    return (
        <ImageBackground
            style={styles.imageContainer}
            source={require('../assets/images/MasterElements.png')}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={slider[sliderActiveSlide]?.image}
                    style={[styles.image, { height: sliderActiveSlide==2? width * 0.65: width * 0.70}]}
                />
                <Carousel
                    ref={_sliderRef}
                    data={slider}
                    renderItem={_renderItem}
                    itemWidth={width}
                    sliderWidth={width}
                    autoplay={false}
                    layout={'default'}
                    onSnapToItem={index => {
                        setSliderActiveSlide(index)
                    }}
                />
                <Text GulfText color={Colors.paua} size={17}
                    style={[styles.title1, {
                        bottom: sliderActiveSlide == 1 ? "12%" : "18%",
                        left: sliderActiveSlide == 2 ? "8%" : "22%"
                    }]}>
                    {items[sliderActiveSlide].title1}
                </Text>
                <Text GulfText color={Colors.paua} size={17}
                    style={[styles.title2, {
                        bottom: sliderActiveSlide == 1 ? 0 : '10%',
                        left: sliderActiveSlide == 2 ? "20%" : "24%"
                    }]}>
                    {items[sliderActiveSlide].title2}
                </Text>
                <Pagination
                    dotsLength={slider ? slider.length : 0}
                    activeDotIndex={sliderActiveSlide}
                    dotStyle={styles.activeDot}
                    containerStyle={styles.paginationContainer}
                    inactiveDotStyle={styles.inactiveDot}
                    // inactiveDotStyle={styles.inactiveDot}
                    inactiveDotOpacity={0.3}
                    inactiveDotScale={1}
                    carouselRef={_sliderRef}
                    tappableDots={!!_sliderRef}
                />
                {sliderActiveSlide != items.length - 1 ?
                    <TouchableOpacity
                        onPress={() => setSliderActiveSlide(sliderActiveSlide + 1)}
                        style={styles.next}>
                        <Image
                            source={require('../assets/images/Next.png')}
                        ></Image>
                    </TouchableOpacity> : null}
                {sliderActiveSlide != 0 ?
                    <TouchableOpacity
                        onPress={() => setSliderActiveSlide(sliderActiveSlide - 1)}
                        style={styles.previous}>
                        <Image source={require('../assets/images/Previous.png')}
                        ></Image>
                    </TouchableOpacity> : null}
            </View>
        </ImageBackground >
    );
}
const styles = StyleSheet.create({
    imageContainer: {
        top: '-7%',
        alignSelf: 'center',
        height: width * 0.70,
        width: '90%',
        left: "5%"
    },
    image: {
        width: '80%',
        position: 'absolute',
        resizeMode: 'contain',
        alignSelf: 'center',
        left: "5%",
        top: "-1%"
    },
    title1: {
        lineHeight: 42,
        position: 'absolute'
    },
    title2: {
        position: 'absolute',
        lineHeight: 42,
    },
    activeDot: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: "#5a649c",
        margin: 0,
        padding: 0,
    },
    inactiveDot: {
        backgroundColor: "#5a649c",
        width: 8,
        height: 8,
        borderRadius: 8,
    },
    paginationContainer: {
        paddingBottom: 19,
        paddingTop: 8,
        alignItems: 'center',
        justifyContent: 'flex-start',
        right: '5%',
        bottom: "-3%"
    },
    next: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: '5%',
        bottom: "-6%",
    },
    previous: {
        position: 'absolute',
        alignSelf: 'flex-start',
        left: '-5%',
        bottom: "-6%",
    }
});
