import useSearchStore from "../stores/store";

function SearchForm() {
  //Get data and functions from zustand
  const { searchQuery, setSearchQuery, submitSearch } = useSearchStore();

  //When the input changes
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); //update the zustand store
  };

  //When the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page reload
    submitSearch(); //call zustand function
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchQuery}
        placeholder="Enter username.."
        onChange={handleInputChange}
      />
      <input type="Submit" />
    </form>
  );
}

export default SearchForm;
