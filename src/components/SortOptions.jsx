import "../App.css";

export default function SortOptions({ sortOrder, setSortOrder }) {
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="sort-options">
      <select value={sortOrder} onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="name">Name (A-Z)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
      </select>
    </div>
  );
}
