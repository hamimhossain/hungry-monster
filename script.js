const searchMeals = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=` + searchText
    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');

    meals.forEach(meal => {
        const li = document.createElement('li');
        li.innerText = meal.strMeal;
        mealContainer.appendChild(li);

    });
}