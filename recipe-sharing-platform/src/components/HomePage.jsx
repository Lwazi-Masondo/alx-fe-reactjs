import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    //fetch() will read from the static json file at runtime
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading JSON: ", error));
  }, []); //Empty array = run only once after first render

  return (
    <div>
      <h1 className="text-center mt-2 font-bold">RECIPE SHARING</h1>
      <div className=" mt-10 md:mt-20">
        <h2 className="text-center font-bold my-10">Recipes</h2>
        <ul className="grid grid-cols-1  md:grid-cols-2 gap-5  mx-10 justify-items-center">
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="text-center w-60 h-auto py-10 px-5 drop-shadow-2xl bg-gray-100 "
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-40 h-40 flex mx-auto hover:contrast-50 cursor-pointer "
              />
              <h3 className="mt-5 font-bold">{recipe.title}</h3>
              <p className="mt-5 text-sm">{recipe.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
