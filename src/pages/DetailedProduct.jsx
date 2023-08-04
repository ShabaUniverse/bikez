import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/App.css";
import RatingStars from "../components/Detailed/RatingStars";

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
    <div className="detailed pt-16 bg-white">
      <div className="detailed-container w-4/5 mx-auto">
        {detailedData && (
          <div className="detailed-wrapper">
            <div className="mainData detailed-grid">
              <div className="left">
                <img src={detailedData.imageUrl} alt="" />
              </div>
              <div className="right pl-10">
                <h1 className="font-bold text-2xl text-yellow-400">
                  {detailedData.title}
                </h1>
                
                <RatingStars rating={detailedData.rating} />

                <div className="sizes flex">
                  <p className=" font-medium mr-2">Available sizes:</p>
                  {detailedData.sizes.map((item) => (
                    <p className=" w-5 text-center bg-yellow-400 mr-2">
                      {item}
                    </p>
                  ))}
                </div>

                <span>Discount 18%</span>
                <h3 className=" text-2xl font-semibold text-red-500">
                  ${detailedData.price}
                </h3>
                <span className=" text-green-400 font-medium">In Stock</span>
                <br />
                <span className=" text-green-400 font-medium">
                  Delivery time 4-7 working days
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedProduct;
