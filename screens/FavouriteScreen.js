import React from 'react'
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'


const FavouriteScreen = props => {
    const displayedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};


FavouriteScreen.navigationOptions = navData => {
    return{
        headerTitle: 'Your Favourites',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item name='menu' iconName='ios-menu' onPress={() => {
                navData.navigation.openDrawer();
                }}/>
            </HeaderButtons>
    }
    
}


export default FavouriteScreen;