class Meal {
    constructor(id, categoryIds, complexity, title, duration, ingrediants, steps, imageUrl, isVegan, isVeg, isLactoseFree) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.complexity = complexity;
        this.title = title;
        this.duration = duration;
        this.ingrediants = ingrediants;
        this.steps = steps;
        this.imageUrl = imageUrl;
        this.isVegan = isVegan;
        this.isVeg = isVeg;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;