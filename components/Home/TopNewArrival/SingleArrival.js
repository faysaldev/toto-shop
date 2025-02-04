import { HeartIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectItems } from "../../../slices/appSlice";
import { addToWish, selectWish } from "../../../slices/wishSlice";
import { useSession } from "next-auth/react";

// TODO: for stripe
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.stripe_public_key);

function SingleArrival({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartData = useSelector(selectItems);
  const { data: session } = useSession();

  const CartId = !!cartData.find(
    (item) => !!(item.product._id === product._id)
  );

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

  const findWishListItem = wishlistAll.find((item) => item === product._id);

  const addToWishList = () => {
    if (session) {
      if (!findWishListItem) {
        dispatch(addToWish(product._id));
      }
      if (!findWishListItem) {
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

  const createCheckoutSession = async () => {
    const items = [
      {
        product: {
          availability: product?.availability,
          image: image,
          price: product?.price,
          shortDescription: product?.shortDescription,
          title: product?.title,
          totalQuantity: product?.totalQuantity,
          _id: product?._id,
        },
        quantity: 1,
      },
    ];

    const stripe = await stripePromise;

    // Call the backend create a checkout session
    const checkoutSession = await axios.post(
      "/api/create-checkout-session",
      {
        items: items,
        email: session.user.email,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    // // Redirect user /customer to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="group rounded bg-white shadow overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product?.image}
          className="w-full h-[205px] object-contain transform  group-hover:scale-125 ease-in-out duration-700 hover:overflow-hidden"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <div
            onClick={() => router.push(`/product/${product._id}`)}
            className="text-white text-lg w-9 h-9 cursor-pointer rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
          >
            <SearchIcon className="h-5 w-5" />
          </div>
          <div
            onClick={
              findWishListItem
                ? () => router.push("/user/wishlist")
                : addToWishList
            }
            className={`text-white text-lg w-9 h-9 rounded-full cursor-pointer ${
              findWishListItem && "text-white bg-black"
            } bg-primary hover:bg-gray-800 transition flex items-center justify-center`}
          >
            <HeartIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <div onClick={() => router.push(`/product/${product._id}`)}>
          <h4 className="uppercase font-medium text-md cursor-pointer mb-2 text-gray-800 hover:text-primary transition">
            {product?.title.slice(0, 45)}
            {product?.title.slice(0, 45) < product.title && "..."}
          </h4>
        </div>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-roboto font-semibold">
            ${product?.price?.toFixed(2)}
          </p>
          <p className="text-sm text-gray-400 font-roboto line-through">
            ${(product?.price * 1.6)?.toFixed(2)}
          </p>
        </div>
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
          <div className="text-xs text-gray-500 ml-3">({product.rating})</div>
        </div>
      </div>
      {/* buy now button */}
      <div className="flex items-center space-x-3 pb-5">
        {CartId ? (
          <div
            onClick={() => router.push("/cart")}
            className="block w-full py-1 text-center text-white font-semibold bg-green-600 border border-green-600 rounded-b cursor-pointer bg-opacity-80"
          >
            Go to Cart
          </div>
        ) : (
          <div
            onClick={AddToCart}
            className="block w-full py-1 text-center cursor-pointer text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Add to Cart
          </div>
        )}

        <div
          onClick={session && createCheckoutSession}
          className={`block w-full py-1 text-center cursor-pointer ${!session && 'cursor-not-allowed'} text-white bg-indigo-500 border-2 border-indigo-500 rounded-b hover:bg-transparent hover:text-pink-600 hover:font-semibold transition rounde-md hover:border-indigo-500`}
        >
          Buy Now
        </div>
      </div>
    </div>
  );
}

export default SingleArrival;
