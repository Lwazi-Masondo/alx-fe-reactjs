import { useState } from "react";

function AddRecipeForm() {
  //State for form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setsteps] = useState("");

  //State for errors
  const [errors, setErrors] = useState({});

  //Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    //validate
    const validate = {};

    if (!title.trim()) {
      validate.title = "Recipe title is required.";
    }
    if (!ingredients.trim()) {
      validate.ingredients = "Please enter at least two ingredient.";
    }
    if (!steps.trim()) {
      validate.steps = "Please enter preparations.";
    }

    setErrors(validate);

    //If no errors, submit form
    if (Object.keys(validate).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split("\n"), //split textarea into list
        steps: steps.split("\n"),
      };

      console.log("✅ Recipe submitted:", newRecipe);

      // Clear form
      setTitle("");
      setIngredients("");
      setsteps("");
      setErrors({});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="my-20 mx-20 flex flex-col gap-5">
      <h2 className="text-center font-bold text-xl mb-10">Add New Recipe</h2>
      <label>Recipe Title</label>
      <input
        type="text"
        value={title}
        placeholder="Enter recipe title.."
        onChange={(e) => setTitle(e.target.value)}
        className="h-14 bg-slate-50 px-2 border-slate-100 shadow-inner"
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

      <label>Ingredients</label>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients.."
        className=" bg-slate-50 px-2 h-40 py-2 border-slate-100 shadow-inner"
      ></textarea>
      {errors.ingredients && (
        <p className="text-red-500 text-sm">{errors.ingredients}</p>
      )}
      <label>Preparation steps</label>
      <textarea
        value={steps}
        onChange={(e) => {
          setsteps(e.target.value);
        }}
        placeholder="Enter steps.."
        className=" bg-slate-50 px-2 py-2 h-40 mb-10 border-slate-100 shadow-inner"
      ></textarea>
      {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      <button
        type="submit"
        className="bg-amber-300 w-32 m-auto rounded py-2 px-2 font-bold drop-shadow-2xl"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
