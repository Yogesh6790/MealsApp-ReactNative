import React from 'react'
import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE, SET_FILTERS } from "../action/meals";

const initialState = {
    allMeals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const mealId = action.mealId;
            const mealIndex = state.favouriteMeals.findIndex(meal => meal.id === mealId);
            if (mealIndex > -1) {
                const updatedFavMeals = [...state.favouriteMeals];
                updatedFavMeals.splice(mealIndex, 1);
                return { ...state, favouriteMeals: updatedFavMeals };
            } else {
                const updatedFavMeals = [...state.favouriteMeals];
                updatedFavMeals.push(state.allMeals.find(meal => meal.id === mealId));
                return { ...state, favouriteMeals: updatedFavMeals };
            }
        case SET_FILTERS:
            const filters = action.filters;
            const updatedFilteredMeals = state.allMeals.filter(meal => {
                if(filters.lactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(filters.vegan && !meal.isVegan){
                    return false;
                }
                if(filters.vegetarian && !meal.isVeg){
                    return false;
                }
                return true;
            });
            return {...state, filteredMeals: updatedFilteredMeals};
        default:
            return state;
    }
    return state;
}
export default mealsReducer;