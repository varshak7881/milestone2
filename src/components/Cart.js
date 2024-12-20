import React, { useState } from "react";
function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Pizza",
      price: 12,
      quantity: 1,
      image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
    },
    {
      id: 2,
      name: "Cake",
      price: 8,
      quantity: 2,
    image: "https://i.pinimg.com/736x/68/7a/0f/687a0fce847343caf121818d8b7baa5d.jpg",
       
    },
  ]);
  const updateQuantity = (id, increment) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + increment, 1) }
          : item
      )
    );
  };
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px", height: "100px", marginRight: "10px" }}
              />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span> Quantity: {item.quantity} </span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}
export default Cart;