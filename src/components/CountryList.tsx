import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '../utils/ResponsiveLayout'
import { countries, countryType } from '../utils/Constant'
import { FONTS } from '../utils/Fonts'
import { COLORS } from '../utils/Colors'
import Animated, {Easing, Layout, SlideInRight} from 'react-native-reanimated'

const CountryList = () => {

    const _renderList = (item: countryType, index: number) => {
        return (
            <Animated.View
              layout={Layout.springify()}
              entering={SlideInRight.delay((index + 1) * 200)} 
            >
                <Image source={item.img} style={styles.countryImage} />
                <Text style={styles.countryName} >{item.name}</Text>
            </Animated.View>
        )
    }

  return (
    <View style={styles.container}>
      <FlatList 
        data={countries}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => _renderList(item, index)}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: wp(12)}} />}
      />
    </View>
  )
}

export default CountryList

const styles = StyleSheet.create({
    container: {
        marginHorizontal: wp(24),
        marginVertical: hp(12)
    },
    countryImage: {
        height: wp(60),
        width: wp(60),
        borderRadius: 60
    },
    countryName: {
        fontSize: wp(14),
        fontFamily: FONTS.POPPINS_REGULAR,
        color: COLORS.TEXT_COLOR,
        textAlign: 'center',
        marginTop: hp(4)
    }
})