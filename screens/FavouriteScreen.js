import React from 'react'
import {View, StyleSheet} from 'react-native'
import MealList from '../components/MealList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import {useSelector} from 'react-redux';
import DefaultText from '../components/DefaultText';


const FavouriteScreen = props => {
    const favMeals = useSelector(state => state.meals.favouriteMeals)
    if(favMeals.length == 0 || !favMeals){
        return (
            <View style={styles.content}>
            <DefaultText>
                No Favourite Meals Found! Start adding some!
            </DefaultText>
            </View>
        );
    }else{
        return (
            <MealList listData={favMeals} navigation={props.navigation} />
        );
    }
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default FavouriteScreen;