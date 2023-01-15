import React from "react";
import { Link } from "react-router-dom";

// functions
import { toFarsiNumber } from "../../helper/functions";

const SearchedProduct = ({data}) => {
  return (
    <div className="py-2 pb-3 border-b">
      {
      data && <Link
        to={`/products/${data.id}`}
        className="w-full flex items-center gap-2 h-16 rounded-lg"
        target="_blank"
      >
        <div className="product-pic flex justify-center items-center bg-[#f5f5f5] p-2 rounded-lg">
          <img
            className="w-12"
            src={data.images[0].img}
            alt=""
          />
        </div>
        <div className=" text-[#353535] flex flex-col gap-2">
          <div className="product-title text-sm sm:text-base">
            <h3>{data.title}</h3>
          </div>
          <div className="product-price flex flex-row-reverse justify-end items-center gap-4">
            <div className="flex justify-center items-center gap-1">
              <span className="text-lg">{toFarsiNumber(data.offPrice)}</span>
              <span>تومان</span>
            </div>
            <span className="line-through text-[#666]">
              {toFarsiNumber(data.price)}
            </span>
          </div>
        </div>
      </Link>
      }
    </div>
  );
};

export default SearchedProduct;
