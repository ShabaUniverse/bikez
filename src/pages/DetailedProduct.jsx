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
    <div className="pt-16 bg-white">
      <div className="w-4/5 mx-auto">
        {detailedData && (
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-1">
              <img src={detailedData.imageUrl} alt={detailedData.title} />
            </div>
            <div className="col-span-1 flex flex-col justify-center pl-14">
              <h1 className="text-2xl font-bold">{detailedData.title}</h1>
              <p className="text-yellow-400 font-medium">{detailedData.type}</p>
              <h2 className=" text-base font-semibold">{detailedData.desc}</h2>
              <RatingStars rating={detailedData.rating} />
              <div className="flex items-center">
                <p className="font-medium mr-2">Available sizes</p>
                {detailedData.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="w-8 h-8 flex items-center justify-center bg-yellow-400 text-white font-bold rounded-full mr-2">
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

        <div className="geometry">
          <table>
            <tr>
              <th>Size</th>
              <th>Rider Height</th>
              <th>Stack</th>
              <th>Reach</th>
              <th>BB Drop</th>
              <th>Wheelbase</th>
              <th>Seat Tube Length</th>
              <th>Top Tube Length</th>
              <th>Head Tube Length</th>
            </tr>
            <tr>
              <td>S</td>
              <td>5'0" - 5'5" (152cm - 165cm)</td>
              <td>530mm</td>
              <td>380mm</td>
              <td>70mm</td>
              <td>1030mm</td>
              <td>490mm</td>
              <td>540mm</td>
              <td>120mm</td>
            </tr>
            <tr>
              <td>M</td>
              <td>5'6" - 5'10" (168cm - 178cm)</td>
              <td>550mm</td>
              <td>390mm</td>
              <td>68mm</td>
              <td>1050mm</td>
              <td>520mm</td>
              <td>560mm</td>
              <td>130mm</td>
            </tr>
            <tr>
              <td>L</td>
              <td>5'11" - 6'3" (180cm - 191cm)</td>
              <td>570mm</td>
              <td>410mm</td>
              <td>66mm</td>
              <td>1070mm</td>
              <td>550mm</td>
              <td>580mm</td>
              <td>150mm</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
