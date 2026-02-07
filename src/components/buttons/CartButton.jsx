"use client";
import { handleCart } from '@/actions/server/cart';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartButton = ({ product }) => {
    const session = useSession();
    const router = useRouter();
    const path = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    const isLogin = session?.status == "authenticated";

    const add2Cart = async () => {
        setIsLoading(true);
        if (isLogin) {
            const result = await handleCart(product._id);
            if (result.success) {
                Swal.fire("Added to Cart", product?.title, "success");
            } else {
                Swal.fire("Opps", "something went wrong", "error");
            }
            setIsLoading(false);
        }
        else {
            router.push(`/login?callbackUrl=${path}`)
            setIsLoading(false);
        }
    }
    return (
        <div>
            <button 
            disabled={session.status == "loading" || isLoading}
            onClick={add2Cart} 
            className="btn btn-primary w-full flex gap-2">
                <FaShoppingCart />
                Add to Cart
            </button>
        </div>
    );
};

export default CartButton;