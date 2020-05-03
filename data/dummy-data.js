import Category from '../models/category'
import Meal from '../models/Meal';

export const CATEGORIES = [ 
    new Category('c1','Italian','#f5428d'),
    new Category('c2','Quick & Easy','#f54242'),
    new Category('c3','Hamburgers','#f5a442'),
    new Category('c4','German','#f5d142'),
    new Category('c5','Light & Lovely','#368dff'),
    new Category('c6','Exotic','#41d95d'),
    new Category('c7','Breakfast','#9eecff'),
    new Category('c8','Asian','#b9ffb0'),
    new Category('c9','French','#ffc7ff'),
    new Category('c10','Summer','#47fced')
];

export const MEALS = [
    new Meal(
        'm1',
        ['c1','c4'],
        'medium',
        'Basil Pasta',
        30,
        ['Pasta', 'Basil', 'Cheese', 'Onion', 'Tomato'],
        ['1. Take Cheese and fry','2. Take Pasta and deep fry it','3. Wash Basil properly for 15 mins',
        '4. Cut onions in small pieces','5. Fry Onion pieces','6. Mix all ingerdiants and fry for 15 mins'],
        'https://www.halfbakedharvest.com/wp-content/uploads/2019/05/20-Minute-Garlic-Basil-Brown-Butter-Pasta-4.jpg',
        true,
        false,
        true
    ),
    new Meal(
        'm2',
        ['c1'],
        'hard',
        'Penne Pasta',
        50,
        ['Pasta', 'Penne', 'Cheese', 'Onion', 'Tomato'],
        ['1. Take Cheese and fry','2. Take Pasta and deep fry it','3. Wash Penne properly for 15 mins',
        '4. Cut onions in small pieces','5. Fry Onion pieces','6. Mix all ingerdiants and fry for 15 mins'],
        'https://media4.s-nbcnews.com/j/newscms/2019_40/1488656/mark-bittman-today-main-191002-04_b23f77b6cc5251edca83d8cbf855cf89.today-inline-large.jpg',
        false,
        true,
        true
    ),
    new Meal(
        'm3',
        ['c2','c1'],
        'easy',
        'Brownie',
        20,
        ['Wheat', 'Corn Flour', 'Sugar', 'Salt', 'Cocoa powder'],
        ['1. Take Wheat and mix Corn flour in it','2. Mix water in it','3. Add necessary sugar, salt in it',
        ' 4. Add Cocoa powder ','5. Bake it in oven for 15 mins'],
        'https://www.seriouseats.com/2018/03/20180413-brownie-mix-vicky-wasik-20.jpg',
        true,
        false,
        false
    ),
    new Meal(
        'm4',
        ['c3','c4'],
        'easy',
        'Muffin',
        20,
        ['Wheat', 'Corn Flour', 'Sugar', 'Salt'],
        ['1. Take Wheat and mix Corn flour in it',' 2. Mix water in it ',' 3. Add necessary sugar, salt in it',
        ' 4. Bake it in oven for 15 mins'],
        'https://www.cookingclassy.com/wp-content/uploads/2018/10/pumpkin-muffins-20.jpg',
        true,
        false,
        false
    )
];
