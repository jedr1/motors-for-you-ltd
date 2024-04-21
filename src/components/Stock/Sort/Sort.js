import React, { useState } from 'react';

const ProductList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item A', price: 50 },
    { id: 2, name: 'Item B', price: 30 },
    { id: 3, name: 'Item C', price: 70 },
    // Add more items here
  ]);

  const [sortOrder, setSortOrder] = useState('');

  // Function to handle sorting
  const handleSortChange = (event) => {
    const selectedOrder = event.target.value;
    setSortOrder(selectedOrder);
    sortItems(selectedOrder);
  };

  // Function to sort the items
  const sortItems = (order) => {
    const sortedItems = [...items];

    if (order === 'highToLow') {
      sortedItems.sort((a, b) => b.price - a.price);
    } else if (order === 'lowToHigh') {
      sortedItems.sort((a, b) => a.price - b.price);
    }

    setItems(sortedItems);
  };

  return (
    <div>
      <select onChange={handleSortChange} value={sortOrder}>
        <option value="" disabled hidden>
          Sort
        </option>
        <option value="highToLow">Price (High to Low)</option>

        <option value="lowToHigh">Price (Low to High)</option>
      </select>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
