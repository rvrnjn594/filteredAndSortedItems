import React, { useState, useEffect } from "react";
import "./App.css";
import items from "./data.js";

import Filters from "./components/Filters.jsx";
import SortOptions from "./components/SortOptions.jsx";
import ItemList from "./components/ItemList.jsx";
import Pagination from "./components/Pagination.jsx";

const App = () => {
  const [filteredItems, setFilteredItems] = useState(items);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filterAndSortItems = () => {
    let filtered = items;

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (minPrice) {
      filtered = filtered.filter((item) => item.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter((item) => item.price <= parseFloat(maxPrice));
    }

    if (sortOrder) {
      if (sortOrder === "price-asc") {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "price-desc") {
        filtered = filtered.sort((a, b) => b.price - a.price);
      } else if (sortOrder === "name") {
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
      }
    }

    setFilteredItems(filtered);
  };

  useEffect(() => {
    filterAndSortItems();
  }, [searchQuery, selectedCategory, minPrice, maxPrice, sortOrder]);

  // Pagination here
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate the indexes of the items
  const indexOfLastItem = itemsPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  // Handle page change
  const Paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="App">
      <h1>Item List</h1>

      <Filters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <SortOptions sortOrder={sortOrder} setSortOrder={setSortOrder} />

      <ItemList items={currentItems} />

      {/* Adding Pagination Here */}

      <div>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button key={pageNumber} onClick={() => Paginate(pageNumber + 1)}>
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
