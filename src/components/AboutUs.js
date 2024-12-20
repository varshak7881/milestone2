import React from "react";
function AboutUs() {
  const chefs = [
    {
      name: "Chef John Doe",
      image: "https://img.freepik.com/premium-photo/hotel-chef-presenting-signature-dish-guests-fine-dining-setting_1314467-5591.jpg", // Replace with your chef image URLs
      description: "Chef John is known for his exceptional pasta dishes and commitment to authentic Italian cooking."
    },
    {
      name: "Chef Jane Smith",
      image: "https://images.squarespace-cdn.com/content/v1/59cfcca9f5e231172832cb8b/1574079641441-0N54NY8L2MU2BOWTMOFY/Chef%2Bcarving%2Bham%2B.jpg?format=1000w", // Replace with your chef image URLs
      description: "Chef Jane specializes in gourmet desserts and has won several awards in the pastry world."
    },
    {
      name: "Chef Emily White",
      image: "https://img.freepik.com/premium-photo/portrait-professional-chef-hotel-restaurant-kitchen_1004054-12163.jpg", // Replace with your chef image URLs
      description: "Chef Emily is famous for his innovative fusion cuisine, blending traditional flavors with modern twists."
    }
  ];

  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        Welcome to our food store! We are passionate about bringing delicious
        meals to your table. Our team of expert chefs ensures that every dish
        is crafted with love and the freshest ingredients.
      </p>
      <p>
        Our mission is to provide an exceptional dining experience, whether you
        enjoy our food at home or dine in with us. Thank you for being a part of
        our journey!
      </p>
      <h2>Our Team</h2>
      <p>
        Meet our chefs and staff who work tirelessly to make your experience
        special.
      </p>
      <div className="team">
        {chefs.map((chef, index) => (
          <div className="chef" key={index} style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={chef.image}
              alt={chef.name}
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            />
            <h3>{chef.name}</h3>
            <p>{chef.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
