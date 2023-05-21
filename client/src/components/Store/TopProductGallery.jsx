import React, { useState } from "react";
import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import Axios from "../../configs/axiosConfig";

const handleDragStart = (e) => e.preventDefault();
const items = [];

function TopProductGallery() {
  const [data, setData] = useState([]);
  const [itemsList, setItemList] = useState([]);
  function limitStringLength(string) {
    if (string.length <= 20) {
      return string;
    } else {
      return string.slice(0, 20) + "...";
    }
  }

  useEffect(() => {
    const tempArray = [];
    const getTopProduct = async () => {
      const response = await Axios.get("/api/dashboard/getTopSaleNumbers").then(
        (res) => {
          res.data.orderedList.forEach((item) =>
            tempArray.push(
              <Link
                className="font-semibold text-lg mt-3"
                to={`/product/${item.product_id}`}
              >
                <div
                  onDragStart={handleDragStart}
                  role="presentation"
                  className="flex flex-col items-center bg-white rounded-xl mx-5"
                >
                  <img
                    src={require(`../../Images/${item.img}`)}
                    alt="laptop"
                    className="w-[200px] h-[220px]"
                  />
                  <p>{limitStringLength(item.name)}</p>
                  <p className="text-gray-600">
                    {item.category}/{item.brand}
                  </p>
                  <p className="font-normal">${item.price}</p>
                </div>
              </Link>
            )
          );
          setItemList(tempArray);
        }
      );
    };
    getTopProduct();
  }, []);
  const responsiveConfig = {
    0: {
      items: 1,
    },
    1024: {
      items: 4,
    },
  };

  return (
    <main>
      {itemsList.length > 0 && (
        <AliceCarousel
          mouseTracking
          autoPlay={true}
          disableButtonsControls={true}
          disableDotsControls={true}
          animationDuration={4000}
          infinite={true}
          items={itemsList}
          responsive={responsiveConfig}
        />
      )}
    </main>
  );
}

export default TopProductGallery;
