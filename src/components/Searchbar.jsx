import React, { useState } from "react";

export const Searchbar = (props) => {
  const { onSearch } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value.toLowerCase()); // This line triggers the search operation in the parent component
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <input
        onChange={handleChange}
        value={searchTerm}
        type="text"
        placeholder="Search Pokemon..."
        className="border-2 border-gray-400 rounded-md mt-16 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};
