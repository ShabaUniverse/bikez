import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "../components/Shop/Categories";
import Products from "../components/Shop/Products";

const Shop = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://63d7d820afbba6b7c945b3e7.mockapi.io/bikes")
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })    
  }, []);

  return (
    <div className="shop">
      <div className="shop-wrapper">
        <Categories />
        {data && <Products data={data}/>}
      </div>
    </div>
  );
};

export default Shop;
