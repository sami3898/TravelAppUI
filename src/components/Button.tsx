import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { hp, wp } from '../utils/ResponsiveLayout';
import { COLORS } from '../utils/Colors';
import { FONTS } from '../utils/Fonts';

interface ButtonProps {
    title: string,
    color?: string,
    onPress: () => void;
}

const Button = (props: ButtonProps) => {

    const { title, color = COLORS.BUTTON_COLOR, onPress} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonText}>{title}</Text>
      <Icon 
        name='arrow-right'
        size={wp(24)}
        color={COLORS.WHITE_COLOR}
        style={{marginLeft: wp(12)}}
      />
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: wp(247),
        height: hp(52),
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.BUTTON_COLOR
    },
    buttonText: {
        fontSize: wp(18),
        fontFamily: FONTS.POPPINS_SEMIBOLD,
        color: COLORS.WHITE_COLOR
    }
})