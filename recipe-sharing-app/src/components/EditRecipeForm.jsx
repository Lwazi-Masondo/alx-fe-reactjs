import useRecipeStore from "../components/recipeStore";

const EditRecipeForm = () => {
  const formData = useRecipeStore((state) => state.formData);
  const updateFormData = useRecipeStore((state) => state.updateFormData);
  const saveRecipe = useRecipeStore((state) => state.saveRecipe);
  const cancelEditing = useRecipeStore((state) => state.cancelEditing);

  const handleChange = (e) => {
    updateFormData(e.target.name, e.target.value);
  };

  return (
    <div>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <button onClick={saveRecipe}>Save</button>
      <button onClick={cancelEditing}>Cancel</button>
    </div>
  );
};

export default EditRecipeForm;
