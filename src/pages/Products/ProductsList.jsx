import React from 'react';
import { Link } from 'react-router-dom';

function ProductsList() {
  return (
    <div>
      <nav>
        <h2>Product</h2>
        <ul id="navigation">
          <li>
            <Link to="categories">Categories</Link>
          </li>
          <li>
            <Link to="add">Add</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <h2>detail</h2>
        <ul id="navigation">
          <li>
            <Link to="1">Product 1</Link>
          </li>
          <li>
            <Link to="2">Product 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProductsList;
