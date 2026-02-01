import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SocialButton = () => {
    const params = useSearchParams();
    
    const handleSignin = async () => {
        const result = await signIn("google", {
            // redirect: false,
            callbackUrl: params.get("callbackUrl") || "",
        });
        console.log(result);
        if (result.ok) {
            Swal.fire("success", "welcome", "success");
        } else {
            Swal.fire("error", "Sorry", "error");
        }
    }
    return (
        <div>
            <button onClick={handleSignin} className="btn btn-primary btn-outline w-full flex gap-2">
                <FaGoogle />
                Continue with Google
            </button>
        </div>
    );
};

export default SocialButton;