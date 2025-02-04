import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFull } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectItems } from "../../../../slices/appSlice";
import {
  addToWish,
  removeSingleWish,
  selectWish,
} from "../../../../slices/wishSlice";

function SingleShopItem({ product, hot }) {
  const cartData = useSelector(selectItems);
  const router = useRouter();
  const { data: session } = useSession();

  const CartId = !!cartData.find(
    (item) => !!(item.product._id === product._id)
  );

  const dispatch = useDispatch();

  const image = Array.isArray(product?.image)
    ? product.image[0]
    : product.image;

  const singleProduct = product;

  const AddToCart = () => {
    dispatch(
      addToBasket({
        product: {
          image,
          availability: singleProduct.availability,
          _id: singleProduct._id,
          totalQuantity: singleProduct.totalQuantity,
          title: singleProduct.title,
          shortDescription: singleProduct.shortDescription,
          price: singleProduct.price,
        },
        quantity: 1,
      })
    );
  };

  const wishlistAll = useSelector(selectWish);

  const findwishList = wishlistAll.find((item) => item === product._id);
  const getWishList = () => {
    if (session) {
      if (!findwishList) {
        dispatch(addToWish(product._id));
      }

      if (!findwishList) {
        fetch("/api/wishlist", {
          method: "POST",
          body: JSON.stringify({ itemID: product._id }),
          headers: {
            "content-type": "application/json",
          },
        });
      }
    } else {
      router.push("/login");
    }
  };

  const removedWishList = () => {
    fetch("/api/wishlist", {
      method: "DELETE",
      body: JSON.stringify({ itemID: product._id }),
      headers: {
        "content-type": "application/json",
      },
    });
    dispatch(removeSingleWish(product?._id));
  };

  return (
    <div className="group rounded-md bg-white shadow overflow-hidden relative border hover:shadow-lg md:flex">
      <div className="relative">
        {/* image div */}
        <div className="w-[300px] h-[285px]">
          <img src={product?.image} className="w-full h-full" />
        </div>

        {/* sometime hot sele */}
        {hot && (
          <div className="absolute top-0 left-0 p-4 text-white font-semibold bg-primary rounded-br-xl z-30">
            Hot
          </div>
        )}
      </div>

      <div className="py-6 px-4 space-y-3 md:flex-grow">
        <a href="view.html">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.title}
          </h4>
        </a>
        {/* Product price */}
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-roboto font-semibold">
            ${product.price}
          </p>
          <p className="text-md text-gray-400 font-roboto line-through">
            $55.00
          </p>
        </div>
        {/* product reating */}

        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
          </div>
          <div className="text-md text-gray-500 ml-3">({product?.rating})</div>
        </div>

        {/* product detils */}
        <p className="text-gray-400 pb-2 pr-20 md:pr-4">
          {product?.shortDescription}
        </p>

        {/* Product button */}

        <div className="flex items-center space-x-5">
          {/* <button className="btn flex items-center space-x-2">
            <ShoppingCartIcon className="h-4" /> <span>Add to Cart</span>
          </button> */}

          {CartId ? (
            <button
              onClick={() => router.push("/cart")}
              className="btn bg-green-600 flex items-center space-x-2"
            >
              <ShoppingCartIcon className="h-4" /> <span>Go to Cart</span>
            </button>
          ) : (
            <button
              onClick={AddToCart}
              className="btn flex items-center space-x-2"
            >
              <ShoppingCartIcon className="h-4" /> <span>Add to Cart</span>
            </button>
          )}

          {findwishList ? (
            <button
              onClick={removedWishList}
              className="btn-outline bg-primary flex text-white  items-center space-x-2"
            >
              <HeartIconFull className="h-4" /> <span>Added</span>
            </button>
          ) : (
            <div
              onClick={getWishList}
              className="btn-outline flex items-center space-x-2"
            >
              <HeartIcon className="h-4" /> <span>Wishlist</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleShopItem;
