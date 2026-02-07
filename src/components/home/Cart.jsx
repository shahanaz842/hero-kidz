"use client"

import { useMemo, useState } from "react";
import CartItem from "../cards/CartItem";
import CartSummary from "../cards/CartSummary";

const Cart = ({ cartItem = [] }) => {
    const [items, setItems] = useState(cartItem)

    const totalItems = useMemo(
        () => items.reduce((sum, item) => sum + item.quantity, 0),
        [items]
    );
    const totalPrice = useMemo(
        () => items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        [items]
    );

    const removeItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item._id != id));
    }

    const updateQuantity = (id, q) => {
        setItems((prevItems) => prevItems.map((item) =>
            item._id == id ? { ...item, quantity: q } : item))
    }

    return (
        <div>
            <p className='py-3'>
                <span className='text-primary font-bold'>{items.length} </span>
                Items
                Found in the Cart
            </p>
            <div className='flex gap-5'>
                <div className='flex-3 space-y-5'>
                    {
                        items.map(item => <CartItem
                            key={item._id.toString()}
                            item={{ ...item, _id: item._id.toString() }}
                            removeItem={removeItem}
                            updateQuantity={updateQuantity}
                        ></CartItem>)
                    }
                </div>
                <div className='flex-1'>
                    <CartSummary
                        items={items}
                        totalItems={totalItems}
                        totalPrice={totalPrice}
                    />
                </div>
            </div>
        </div>
    );
};

export default Cart;