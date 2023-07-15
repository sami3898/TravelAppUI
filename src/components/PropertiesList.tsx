import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import {Image} from 'expo-image'
import { hp, wp } from '../utils/ResponsiveLayout'
import { FONTS } from '../utils/Fonts'
import { COLORS } from '../utils/Colors'
import { destinationType, destinations } from '../utils/Constant'
import Animated, {Layout, SlideInUp, FadeInUp, FadeOutUp} from 'react-native-reanimated'

const PropertiesList = () => {

  const _renderProperties = (item: destinationType, index: number) => {
    return (
      <Animated.View 
      layout={Layout.springify()}
      entering={FadeInUp.delay((index + 1) * 200)}
      style={styles.propertyCard}>
        <Image
          source={item.images[0]}
          style={styles.cardImage}
          priority={'high'}
          cachePolicy={'memory-disk'}
        />
        <View style={styles.cardInfoContainer}>
          <View>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <View style={styles.rowContainer}>
              <Icon name='location-outline' color={COLORS.BUTTON_COLOR} size={wp(18)} />
              <Text style={styles.cardOrigin}>{item.origin}</Text>
            </View>
          </View>
          <View style={styles.cardButton}>
            <Icon 
              name='arrow-forward-outline'
              size={wp(20)}
              color={COLORS.WHITE_COLOR}
            />
          </View>

        </View>
        
      </Animated.View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Trending Destinations</Text>
      <FlatList 
        data={destinations}
        keyExtractor={item => item.id.toString()}
        renderItem={({item,index}) => _renderProperties(item,index)}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: wp(12)}} />}
      />
    </View>
  )
}

export default PropertiesList

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
    propertyCard: {
      padding: wp(16),
      marginTop: hp(10),
      justifyContent: 'center',
      backgroundColor: COLORS.WHITE_COLOR,
      borderRadius: 20,
    },
    cardImage: {
      width: wp(220),
      height: hp(140),
      borderRadius: 20
    },
    cardInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    cardTitle: {
      fontSize: wp(16),
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      color: COLORS.TEXT_COLOR,
      marginTop: hp(8)
    },
    cardOrigin: {
      fontSize: wp(14),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.LIGHT_TEXT_COLOR,
      marginLeft: wp(6)
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(4)
    },
    cardButton: {
      height: wp(28),
      width: wp(28),
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.BUTTON_COLOR,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    }
})