import React from 'react'
import { View, ScrollView, Text, Button, StyleSheet,Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
}
const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
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
    const mealId = navigationData.navigation.getParam('mealId');
    console.log("mealId " + mealId)
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    console.log("selectedMeal " + selectedMeal.title)
    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item iconName='ios-star' onPress={() => { console.log('favourite pressed') }} />
        </HeaderButtons>
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