"use client";

import Link from "next/link";

export default function CartSummary({ items, totalItems, totalPrice }) {
  return (
    <div className="card bg-base-100 shadow-md border border-gray-100 sticky top-24">
      <div className="card-body">
        <h3 className="text-lg font-bold mb-4">Order Summary</h3>

        {/* Items */}
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex justify-between text-sm border-b pb-2"
            >
              <div>
                <p className="font-medium line-clamp-1">
                  {item.title}
                </p>
                <p className="text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div>

              <div className="text-right">
                <p>৳{item.price}</p>
                <p className="font-medium">
                  ৳{item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between font-semibold text-base">
            <span>Total Price</span>
            <span>৳{totalPrice}</span>
          </div>
        </div>

        {/* Confirm Button */}
        <Link 
        href={"/checkout"} 
        className="btn btn-primary w-full mt-5"
        disabled={!items.length}
        >
          Confirm Order
        </Link>
      </div>
    </div>
  );
}
