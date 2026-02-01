import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import CartButton from "../buttons/CartButton";

const ProductCard = ({ product, onAddToCart }) => {
  if (!product) return null;

  const {
    _id,
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      {/* Image */}
      <figure className="relative h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-base line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center text-yellow-400">
            <FaStar />
            <span className="ml-1 text-gray-700">{ratings}</span>
          </div>
          <span className="text-gray-500">({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500">
          Sold: <span className="font-medium">{sold}</span>
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount && (
            <span className="line-through text-sm text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Buttons */}
        <CartButton product={{...product, _id: _id.toString()}}></CartButton>
        <Link href={`/products/${_id}`}
          className="btn btn-primary btn-outline btn-sm mt-3 flex items-center gap-2"
        >
          View Details
          <FaArrowRightLong />
          
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
