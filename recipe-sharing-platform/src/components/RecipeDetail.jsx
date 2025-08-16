import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); //get ID from url
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/public/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find(
          (item) => item.id === parseInt(id) //match recipe ID
        );
        setRecipe(foundRecipe);
      })
      .catch((error) =>
        console.error("Error fetching recipe details: ", error)
      );
  }, [id]);

  if (!recipe) {
    return <p>Loading Recipe...</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>

      <img src={recipe.image} alt={recipe.title} />

      <h3>ingredients</h3>
      <ol>
        {recipe.ingredients.map((ingrediant, index) => (
          <li key={index}>{ingrediant}</li>
        ))}
      </ol>

      <h3>Instructions</h3>
      <ol>
        <li>{recipe.instructions}</li>
      </ol>
    </div>
  );
}

export default RecipeDetail;
