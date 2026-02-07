"use client";

import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Swal from "sweetalert2";

const CheckOut = ({ cartItems = [] }) => {
    const session = useSession();
    const router = useRouter();

    const totalPrice = useMemo(
        () =>
            cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            ),
        [cartItems]
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const payload = {
            name: form.name.value,
            email: form.email.value,
            contact: form.phone.value,
            address: form.address.value,
            instruction: form.instruction.value,
        }

     
        const result = await createOrder(payload);
        if(result.success){
            Swal.fire("success","Order added","success")
            router.push("/");
        }else{
            Swal.fire("error","Something went wrong","error")
            router.push("/cart");
        }
    };

    if(session.status == "loading"){
        return <h2>Loading...</h2>
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-2">
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="text-lg font-semibold mb-4">
                                Billing Information
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Full Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={session?.data?.user?.name}
                                            // onChange={handleChange}
                                            className="input input-bordered w-full"
                                            required
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={session?.data?.user?.email}
                                            // onChange={handleChange}
                                            className="input input-bordered w-full"
                                            required
                                            readOnly
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        // value={form.phone}
                                        placeholder="01XXXXXXXXX"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <textarea
                                        name="address"
                                        // value={form.address}
                                        placeholder="Delivery address"
                                        className="textarea textarea-bordered w-full"
                                        required
                                    ></textarea>
                                </div>

                                {/* Special Instructions */}
                                <div>
                                    <label className="label">
                                        <span className="label-text">Special Instructions</span>
                                    </label>
                                    <textarea
                                        name="instruction"
                                        // value={form.instruction}
                                        placeholder="Any delivery notes, gift message, or special request"
                                        className="textarea textarea-bordered w-full"
                                    ></textarea>
                                </div>

                                <button className="btn btn-primary w-full">
                                    Place Order
                                </button>
                            </form>

                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="card bg-base-100 shadow-md sticky top-24">
                        <div className="card-body">
                            <h2 className="text-lg font-semibold mb-4">
                                Order Summary
                            </h2>

                            <div className="space-y-3 text-sm">
                                {cartItems.map((item) => (
                                    <div
                                        key={item._id}
                                        className="flex justify-between border-b pb-2"
                                    >
                                        <div>
                                            <p className="font-medium line-clamp-1">
                                                {item.title}
                                            </p>
                                            <p className="text-gray-500">
                                                Qty: {item.quantity}
                                            </p>
                                        </div>

                                        <p className="font-medium">
                                            ৳{item.price * item.quantity}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 border-t pt-3">
                                <div className="flex justify-between font-semibold text-base">
                                    <span>Total</span>
                                    <span>৳{totalPrice}</span>
                                </div>
                            </div>

                            <button className="btn btn-outline w-full mt-4">
                                Edit Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
