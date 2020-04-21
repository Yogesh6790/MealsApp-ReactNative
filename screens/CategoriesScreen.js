import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} select={()=>{
                props.navigation.navigate('CategoryMeals',
                { categoryId: itemData.item.id }) 
            }} />
        );
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    );
};

CategoriesScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Meals Categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item name='menu' iconName='ios-menu' onPress={() => {
                navData.navigation.openDrawer(); 
                }}/>
            </HeaderButtons>
    }
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;