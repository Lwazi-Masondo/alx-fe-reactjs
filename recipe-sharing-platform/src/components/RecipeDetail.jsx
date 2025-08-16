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
      <h2 className="text-center my-10 font-bold text-2xl">{recipe.title}</h2>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-64 h-96 mx-auto md:w-96 rounded-md shadow-2xl"
      />

      <h3 className="text-center font-bold my-20 text-xl">Ingredients</h3>
      <ol className="text-center mb-20 text-base">
        {recipe.ingredients.map((ingrediant, index) => (
          <li key={index}>{ingrediant}</li>
        ))}
      </ol>

      <h3 className="text-center font-bold mb-16 text-xl">Instructions</h3>
      <ol className="mx-20 text-center mb-20 text-base">
        <li>{recipe.instructions}</li>
      </ol>
    </div>
  );
}

export default RecipeDetail;
