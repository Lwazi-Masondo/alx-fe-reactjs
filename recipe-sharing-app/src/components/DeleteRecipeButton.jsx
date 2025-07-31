const DeleteRecipeButton = () => {
  return (
    <button onClick={() => DeleteRecipeButton(RecipeDetails.id)}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
