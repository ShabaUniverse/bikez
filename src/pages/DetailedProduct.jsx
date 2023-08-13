import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/App.css";
import RatingStars from "../components/Detailed/RatingStars";
import Geometry from "../components/Detailed/Geometry";

const DetailedProduct = () => {
  const { id } = useParams();
  const [detailedData, setDetailedData] = useState(null);

  useEffect(() => {
    const getDetailedData = async () => {
      const res = await axios.get(
        "https://63d7d820afbba6b7c945b3e7.mockapi.io/bikes/" + id,
      );
      setDetailedData(res.data);
    };
    getDetailedData();
  }, []);

  return (
    <div className=" bg-white pt-10">
      <div className=" max-w-6xl px-4 mx-auto">
        {detailedData && (
          <div className="grid place-items-center lg:grid-cols-2">
            <div>
              <img
                src={detailedData.imageUrl}
                alt={detailedData.title}
                className="w-96"
              />
            </div>

            <div className="">
              <h1 className="text-2xl font-bold">{detailedData.title}</h1>
              <p className="text-yellow-400 font-medium">{detailedData.type}</p>
              <h2 className=" text-base font-semibold">{detailedData.desc}</h2>
              <RatingStars rating={detailedData.rating} />
              <div className="">
                <p className="font-medium">Available sizes</p>
                {detailedData.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="bg-yellow-400 text-white px-3 mr-1 font-bold rounded-full">
                    {size}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold">${detailedData.price}</h3>
              <span className="text-yellow-400 font-medium">In Stock</span>
              <span className="text-yellow-400 font-medium">
                Delivery time: 4-7 working days
              </span>
            </div>
          </div>
        )}

        {detailedData && (
          <Geometry />
        )}
      </div>
    </div>
  );
};

export default DetailedProduct;
