import Link from "next/link";
import React from "react";

function MyProductCard({ product,confirmDelete }) {
  const truncateDescription =
    product.title.length > 30
      ? `${product.title.substring(0, 30)}...`
      : product.title;



  return (
    <div className="flex hover:bg-[#E9EFFF] cursor-pointer items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
      {/* <!-- product image --> */}
      <div className="w-32 flex-shrink-0">
        <img src={product.image[0]} className="w-full" />
      </div>
      {/* <!-- product image end --> */}
      {/* <!-- product content --> */}
      <div className="md:w-1/3 w-full">
        <h2 className="text-gray-800 mb-3 xl:text-md text-md font-medium">
          {truncateDescription}
        </h2>
        <p className="text-primary font-semibold">$ {product.price}</p>
      </div>
      {/* <!-- product content end --> */}
      {/* <!-- product sold --> */}
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
        <div className="h-8 w-10 flex items-center justify-center">
          {/* {product?.sold} */} 0
        </div>
      </div>

      {/* product Quantity */}
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
        <div className="h-8 w-10 flex items-center justify-center">
          {/* {product?.sold} */} {product.totalQuantity}
        </div>
      </div>
      {/* TODO: product quantity end */}
      {/* <!-- product quantity end --> */}
      <div className="ml-auto md:ml-0">
        <p className="text-green-600 text-lg font-semibold">{/* 556 */}</p>
      </div>
      <Link href={`/user/editproduct/${product._id}`}>
        <div className="text-gray-600 hover:text-green-600 cursor-pointer">
          <i className="fas fa-edit"></i>
        </div>
      </Link>
      <div onClick={() => confirmDelete(product._id)} className="text-gray-600 hover:text-primary cursor-pointer">
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
}

export default MyProductCard;
