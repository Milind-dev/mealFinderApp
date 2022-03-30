{
  this.state.meals ? (
    <div id="meals-container">
      {this.state.meals.map((meal, index) => (
        <div class="single-meal" key={index}>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt="meal-thumbnail" />
        </div>
      ))}
    </div>
  ) : (
    <p>Try searching for a meal</p>
  );
}
