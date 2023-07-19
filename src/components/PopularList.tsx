import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { hp, wp } from '../utils/ResponsiveLayout'
import { FONTS } from '../utils/Fonts'
import { COLORS } from '../utils/Colors'
import { destinationType, destinations } from '../utils/Constant'
import { Image } from 'expo-image'
import Icon from '@expo/vector-icons/Ionicons';
import Animated, { Layout, SlideInRight } from 'react-native-reanimated'

const PopularList = () => {

    const _renderPopularList = (item: destinationType, index: number) => {
        return (
            <Animated.View 
            layout={Layout.springify()}
            entering={SlideInRight.delay(index * 100)}
            style={styles.cardContainer}>
                <Image 
                    source={item.images[1]}
                    priority={'high'}
                    cachePolicy={'memory'}
                    style={styles.cardImage}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <View style={styles.rowContainer}>
                        <Icon 
                            name='location-outline'
                            size={wp(18)}
                            color={COLORS.BUTTON_COLOR}
                        />
                        <Text style={styles.cardOrigin}>{item.origin}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Icon 
                            name='star-outline'
                            size={wp(18)}
                            color={COLORS.BUTTON_COLOR}
                        />
                        <Text style={styles.cardOrigin}>{'2.1k+ reviews'}</Text>
                    </View>
                </View>
            </Animated.View>
        )
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Popular Destination</Text>
      <FlatList 
        data={destinations}
        keyExtractor={item => item.id.toString()}
        renderItem={({item,index}) => _renderPopularList(item, index)}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: wp(12)}} />}
      />
    </View>
  )
}

export default PopularList

const styles = StyleSheet.create({
    container: {
        marginHorizontal: wp(24),
        marginVertical: hp(12)
    },
    titleText: {
        fontSize: wp(18),
        fontFamily: FONTS.POPPINS_REGULAR,
        color: COLORS.TEXT_COLOR
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp(12),
        marginTop: hp(10),
        backgroundColor: COLORS.WHITE_COLOR,
        borderRadius: 12,
    },
    cardImage: {
        height: hp(86),
        width: wp(120),
        borderRadius: 12
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoContainer: {
        marginLeft: wp(12),
    },
    cardTitle: {
        fontSize: wp(14),
        fontFamily: FONTS.POPPINS_SEMIBOLD,
        color: COLORS.TEXT_COLOR
    },
    cardOrigin: {
        fontSize: wp(14),
        fontFamily: FONTS.POPPINS_REGULAR,
        color: COLORS.LIGHT_TEXT_COLOR,
        marginLeft: wp(6)
    },
})