import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';

import AppText from '../components/AppText';

function Card({title, subtitle, image}) {
    return (
        <View style={styles.card}>

            <Image style={styles.image} source={image} />

            <View style={styles.detialsContainer}>
            <AppText style={styles.title}>{title}</AppText> 
            <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"

    },
    detialsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
    }
})

export default Card;