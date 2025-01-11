const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-center items-center my-6"
    >
      <input
        type="text"
        name="city"
        placeholder="Enter city name"
        className="border border-gray-300 rounded-lg p-2 w-2/3 md:w-1/2 lg:w-1/3"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
