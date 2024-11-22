import "../App.css";

export default function Filters(props) {
  const handleSearchChange = (e) => {
    props.setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    props.setSelectedCategory(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    props.setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    props.setMaxPrice(e.target.value);
  };


  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by name"
        value={props.searchQuery}
        onChange={handleSearchChange}
      />
      <select value={props.selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="Clothing">Clothing</option>
      </select>
      <input
        type="number"
        placeholder="Min Price"
        value={props.minPrice}
        onChange={handleMinPriceChange}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={props.maxPrice}
        onChange={handleMaxPriceChange}
      />
     
    </div>
  );
}
