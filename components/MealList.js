import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem';

const MealList = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetail', { mealId: itemData.item.id })
                }} />
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem} style={{ width: '90%' }} />
        </View>
    );

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;