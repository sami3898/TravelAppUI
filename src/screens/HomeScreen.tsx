import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../utils/ResponsiveLayout";
import { FONTS } from "../utils/Fonts";
import Icon from '@expo/vector-icons/Ionicons'
import SearchBar from "../components/SearchBar";
import CountryList from "../components/CountryList";


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.userContainer}>
                    <Image
                        source={require("../../assets/images/user.jpg")}
                        style={styles.userProfile}
                    />
                    <Text style={styles.userName}>Hello, Jhon!</Text>
                </View>
                <View style={styles.notificationContainer}>
                  <Icon 
                    name="notifications-outline"
                    color={COLORS.TEXT_COLOR}
                    size={wp(24)}
                  />
                </View>
            </View>
            <Text style={styles.findText}>Find your stay</Text>
            <SearchBar />
            <CountryList />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BG_COLOR,
    },
    topContainer: {
        marginHorizontal: wp(24),
        marginTop: hp(26),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    userProfile: {
        height: wp(50),
        width: wp(50),
        resizeMode: "contain",
        borderRadius: 50,
    },
    userName: {
        fontSize: wp(20),
        fontFamily: FONTS.POPPINS_SEMIBOLD,
        color: COLORS.TEXT_COLOR,
        marginLeft: wp(12),
    },
    notificationContainer: {
        height: wp(50),
        width: wp(50),
        borderRadius: 50,
        backgroundColor: COLORS.WHITE_COLOR,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    findText: {
      fontSize: wp(18),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.TEXT_COLOR,
      marginHorizontal: wp(24),
      marginTop: hp(26)
    }
});
