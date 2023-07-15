import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    Image,
} from "react-native";
import React from "react";
import { FONTS } from "../utils/Fonts";
import { COLORS } from "../utils/Colors";
import { IntroData, introDataType } from "../utils/Constant";
import Button from "../components/Button";
import { DEVICE_HEIGHT, DEVICE_WIDTH, hp, wp } from "../utils/ResponsiveLayout";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { IntoStackParamList } from "../../App";


const IntroScreen = () => {

    const navigation = useNavigation<NavigationProp<IntoStackParamList>>();

    const _renderSlides = (item: introDataType, index: number) => {
        return (
            <View style={styles.slideContainer}>
                <View style={styles.counterContainer}>
                    <Text style={styles.counterText}>{`${index + 1} / ${
                        IntroData.length
                    }`}</Text>
                </View>
                <Image source={item.img} style={styles.slideImage} />
                <Text style={styles.slideTitle}>{item.title}</Text>
                <Text style={styles.slideDesc}>{item.desc}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={IntroData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => _renderSlides(item, index)}
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                getItemLayout={(data, index) => ({
                    length: DEVICE_WIDTH,
                    offset: DEVICE_WIDTH * index,
                    index,
                })}
            />
            <Button 
                title="Get started" 
                onPress={() => { navigation.navigate("HomeScreen")}} 
                buttonStyle={{
                    marginBottom: hp(20)
                }}
            />
        </SafeAreaView>
    );
};

export default IntroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BG_COLOR,
        alignItems: "center",
    },
    slideContainer: {
        width: DEVICE_WIDTH,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    slideTitle: {
        fontSize: wp(16),
        fontFamily: FONTS.POPPINS_SEMIBOLD,
        color: COLORS.TEXT_COLOR,
        textAlign: "center",
    },
    slideDesc: {
        fontSize: wp(14),
        fontFamily: FONTS.POPPINS_REGULAR,
        color: COLORS.LIGHT_TEXT_COLOR,
        marginTop: hp(8),
        width: DEVICE_WIDTH - 40,
        textAlign: "center",
    },
    slideImage: {
        height: DEVICE_HEIGHT / 2,
        width: DEVICE_WIDTH - 80,
        resizeMode: "contain",
    },
    counterContainer: {
        paddingHorizontal: wp(8),
        paddingVertical: hp(4),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9C5B9",
        borderRadius: 50,
        alignSelf: "flex-end",
        marginRight: wp(20),
    },
    counterText: {
        fontSize: wp(12),
        fontFamily: FONTS.POPPINS_REGULAR,
        color: COLORS.LIGHT_TEXT_COLOR,
    },
});
