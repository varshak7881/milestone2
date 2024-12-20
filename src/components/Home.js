import React, { useState, useEffect } from "react";
import { menuData } from "../data";
const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [items.length]);

  return (
    <div className="carousel">
      <div className="carousel-item">
        <img src={items[currentIndex].image} alt={items[currentIndex].name} />
        <h3>{items[currentIndex].name}</h3>
        <p>{items[currentIndex].price}</p>
      </div>
    </div>
  );
};

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMenuData, setFilteredMenuData] = useState(menuData);

  
  useEffect(() => {
    const filtered = menuData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMenuData(filtered);
  }, [searchQuery]);

  return (
    <div className="container">
      <h1>Welcome to Our TastyTrail Food Store</h1>
      <p>Explore our popular dishes and seasonal specials!</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search menu items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {/* Carousel for Promotions */}
      <Carousel items={menuData.slice(0, 3)} />

      <div className="featured">
        {filteredMenuData.slice(0, 5).map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;