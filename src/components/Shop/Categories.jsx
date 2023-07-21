import React, { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  let categories = [
    { name: "Mountain", id: 1 },
    { name: "Road", id: 2 },
    { name: "Cross", id: 3 },
    { name: "Gravel", id: 4 },
    { name: "E-Bikes", id: 5 },
    { name: "BMX", id: 6 },
  ];
  return (
    <div className="categories pt-20 pb-10 bg-yellow-400">
      <div className="categories-container w-4/5 m-auto">
        <div className="categories-list flex justify-around items-center">
          {categories.map((category) => (
            <p
              className={
                category.id === activeCategory
                  ? "text-white font-semibold cursor-pointer"
                  : "font-semibold cursor-pointer"
              }
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
