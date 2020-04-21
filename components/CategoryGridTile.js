import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const CategoryGridTile = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.select}>
            <View style={{...styles.container, ...{backgroundColor : props.color}}}>
                <Text numberOfLines={2} style={styles.textStyle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10
    },
    container: {
        flex: 1,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity:  0.50,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10
    },
    textStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default CategoryGridTile;