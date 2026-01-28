import Image from "next/image";
import { FaStar, FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { getSingleProduct } from "@/actions/server/product";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = await getSingleProduct(id);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    const finalPrice = product.discount
        ? product.price - (product.price * product.discount) / 100
        : product.price;

    return {
        title: product.title,
        description: product.description.slice(0, 160),

        openGraph: {
            title: product.title,
            description: product.description.slice(0, 160),
            images: [
                {
                    url: product.image,
                    width: 1200,
                    height: 630,
                    alt: product.title,
                },
            ],
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: product.title,
            description: `৳${finalPrice} | ${product.ratings}⭐ (${product.reviews} reviews)`,
            images: [product.image],
        },
    };
}


const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const product = await getSingleProduct(id);

    if (!product) return null;

    const {
        title,
        bangla,
        image,
        price,
        discount,
        ratings,
        reviews,
        sold,
        description,
        info,
        qna,
    } = product;

    const finalPrice = discount
        ? Math.round(price - (price * discount) / 100)
        : price;

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Image */}
                <div className="relative w-full h-[420px] bg-base-200 rounded-xl overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                    />
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-gray-500">{bangla}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center text-yellow-400 gap-1">
                            <FaStar />
                            <span className="text-gray-700 font-medium">{ratings}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                            ({reviews} reviews)
                        </span>
                        <span className="text-sm text-gray-500">
                            • Sold {sold}
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-primary">
                            ৳{finalPrice}
                        </span>
                        {discount && (
                            <>
                                <span className="line-through text-gray-400">
                                    ৳{price}
                                </span>
                                <span className="badge badge-error badge-sm">
                                    -{discount}%
                                </span>
                            </>
                        )}
                    </div>

                    {/* Add to Cart */}
                    <button className="btn btn-primary w-full md:w-fit flex gap-2">
                        <FaShoppingCart />
                        Add to Cart
                    </button>

                    {/* Key Info */}
                    <div className="mt-6 space-y-2">
                        {info?.map((item, index) => (
                            <p
                                key={index}
                                className="flex items-center gap-2 text-sm text-gray-600"
                            >
                                <FaCheckCircle className="text-success" />
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mt-12">
                <h2 className="text-xl font-semibold mb-3">
                    Product Description
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {description}
                </p>
            </div>

            {/* Q&A */}
            <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">
                    Questions & Answers
                </h2>

                <div className="space-y-3">
                    {qna?.map((item, index) => (
                        <div
                            key={index}
                            className="collapse collapse-arrow bg-base-200"
                        >
                            <input type="checkbox" />
                            <div className="collapse-title font-medium">
                                {item.question}
                            </div>
                            <div className="collapse-content text-gray-600">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
