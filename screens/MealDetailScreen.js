import React, {useEffect, useCallback} from 'react'
import { View, ScrollView, Text, Button, StyleSheet,Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText';
import {useSelector, useDispatch} from 'react-redux'
import { toggleFavourites } from '../store/action/meals';


const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText> 
        </View>
    );
}
const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const meals = useSelector(state => state.meals.allMeals)
    const selectedMeal = meals.find(meal => meal.id === mealId);
    console.log(selectedMeal.title);
    

    const dispatch = useDispatch();

    const toggleFavHandler = useCallback(() => {
        console.log('Dispatching...'); 
        dispatch(toggleFavourites(selectedMeal.id))
    }, [dispatch, mealId]) 

    useEffect(() =>{
        props.navigation.setParams({toggleFav: toggleFavHandler, mealTitle: selectedMeal.title});
    }, [toggleFavHandler, selectedMeal.title])
    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.detail}> 
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingrediants</Text>
            {selectedMeal.ingrediants.map(ingredient => {return (<ListItem key={ingredient}>{ingredient}</ListItem>)})}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => {return (<ListItem key={step}>{step}</ListItem>)})}
            <View style={styles.screen}>
                <Button title="Go Back to Categories Screen" onPress={() => props.navigation.popToTop()} />
            </View>
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const toggleFavHandler = navigationData.navigation.getParam('toggleFav');
    const selectedMealTitle = navigationData.navigation.getParam('mealTitle');
    console.log("selectedMeal " + selectedMealTitle) 
    return {
        headerTitle: selectedMealTitle, 
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favourites' iconName='ios-star' onPress={toggleFavHandler} />
        </HeaderButtons>)
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        alignItems: 'center'
    },
    detail: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'

    },
    title: {
        fontFamily: 'open-sans-bold', 
        fontSize: 22,
        textAlign: 'center' 
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        alignItems: 'center'
    }
});

export default MealDetailScreen; 