import React, { useState } from "react";
import { menuData } from "../data";
import "./Menu.css"; 

function Menu() {
  const [filter, setFilter] = useState("All");
  const filteredMenu = filter === "All" ? menuData : menuData.filter((item) => item.category === filter);

  return (
    <div className="container">
      <h1>Menu</h1>
      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Starters")}>Starters</button>
        <button onClick={() => setFilter("Main Course")}>Main Course</button>
        <button onClick={() => setFilter("Desserts")}>Desserts</button>
      </div>
      <div className="menu">
        {filteredMenu.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <div className="card-overlay">
              <p>{item.description}</p> {/* Item details */}
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;