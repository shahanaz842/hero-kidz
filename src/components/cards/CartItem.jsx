"use client";

import { decreaseItemDb, deleteItemsFromCart, increaseItemDb } from "@/actions/server/cart";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

export default function CartItem({ item, removeItem, updateQuantity}) {
    const { image, title, quantity, price, _id } = item;
    const [loading, setLoading] = useState(false);

    const handleDeleteCart = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await deleteItemsFromCart(_id);
                if (result.success) {

                    removeItem(_id);

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Opps!",
                        text: "Something went wrong.",
                        icon: "error"
                    });
                }
            }
        });
    }

    const onIncrease = async ()=>{
        setLoading(true);
        const result = await increaseItemDb(_id, quantity);
        if(result.success){
            Swal.fire("success", "Quantity increased", "success")
            updateQuantity(_id, quantity + 1);
        }
        setLoading(false);
    }
    const onDecrease = async ()=>{
        setLoading(true);
        const result = await decreaseItemDb(_id, quantity);
        if(result.success){
            Swal.fire("success", "Quantity decreased", "success")
            updateQuantity(_id, quantity - 1);
        }
        setLoading(false);
    }

    return (
        <div className="card bg-base-100 shadow-sm border border-gray-100 hover:shadow-md">
            <div className="card-body p-4">
                <div className="flex gap-4 items-center">
                    {/* Image */}
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-base-200">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="80px"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <h3 className="font-medium line-clamp-2">
                            {title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            ৳{price} × {quantity}
                        </p>

                        {/* Quantity Control */}
                        <div className="flex items-center gap-2 mt-2">
                            <button
                                onClick={onDecrease}
                                disabled={quantity <= 1 || loading}
                                className="btn btn-xs btn-outline"
                            >
                                <FaMinus />
                            </button>

                            <span className="px-2 text-sm font-medium">
                                {quantity}
                            </span>

                            <button
                                onClick={onIncrease}
                                disabled={quantity >= 10 || loading}
                                className="btn btn-xs btn-outline"
                            >
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    {/* Total & Remove */}
                    <div className="space-y-2">
                        <p className="font-semibold">৳ {price * quantity}</p>
                        <button
                            onClick={handleDeleteCart}
                            className="btn btn-sm btn-ghost text-error btn-outline"
                        >
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
