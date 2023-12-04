document.getElementById('searchButton').addEventListener('click', function() {
    var category = document.getElementById('searchBox').value;
    fetchMealsByCategory(category);
});

function fetchMealsByCategory(category) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(response => response.json())
        .then(data => displayMeals(data.meals));
}

function displayMeals(meals) {
    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; // Clear previous content

    if (meals === null || meals.length === 0) {
        resultContainer.innerHTML = '<p>No meals found for this category. Try a different search.</p>';
        return;
    }

    meals.slice(0, 5).forEach(meal => {
        var mealDiv = document.createElement('div');
        mealDiv.classList.add('meal');
        mealDiv.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width:100%;border-radius: 5px;">
        `;
        resultContainer.appendChild(mealDiv);
    });
}
