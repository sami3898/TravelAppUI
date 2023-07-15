import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { hp, wp } from '../utils/ResponsiveLayout'
import { COLORS } from '../utils/Colors'
import { FONTS } from '../utils/Fonts'
import Icon from '@expo/vector-icons/Ionicons'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Search Hotels, Destination'
        style={styles.inputStyle}
      />
        <Icon 
            name='search-outline'
            color={COLORS.TEXT_COLOR}
            size={wp(20)}
            style={{marginLeft: wp(8)}}
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: wp(24),
        marginVertical: hp(10),
        paddingVertical: hp(12),
        paddingHorizontal: wp(16),
        borderRadius: 12,
        backgroundColor: COLORS.WHITE_COLOR,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    inputStyle: {
        flex: 1,
        fontSize: wp(14),
        fontFamily: FONTS.POPPINS_REGULAR,
        color: COLORS.TEXT_COLOR
    }
})