import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import Colors from '../constants/Colors';
import FilterScreen from '../screens/FilterScreen';

const defNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
};
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        title: 'Category Meals',
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, defNavOptions);

const favStackNavigator = createStackNavigator({
    Favourites: FavouriteScreen,
    MealDetail: MealDetailScreen
}, defNavOptions);

const MealsFavNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Favourites: {
        screen: favStackNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            }
        }
    }
}, {
        tabBarOptions: {
            labelStyle:{
                fontFamily: 'open-sans'
            },
            activeTintColor: Colors.accentColor 
        }
    });

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
}, defNavOptions)

const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsFavNavigator, navigationOptions : {
            drawerLabel : 'Meals'
        }
    },
    Filters: FiltersNavigator
},{
    contentOptions : {
        activeTintColor: Colors.accentColor,
        labelStyle: {
           fontFamily: 'open-sans-bold' 
        }
    }
})

export default createAppContainer(MainNavigator);
