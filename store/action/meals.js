export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavourites = (id) => {
    console.log('action dispatching...') 
    return { type: TOGGLE_FAVOURITE, mealId: id}; 
}

export const setFilters = (filterSettings) => {
    console.log('action dispatching...') 
    return { type: SET_FILTERS, filters: filterSettings}; 
}