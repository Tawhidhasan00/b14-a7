'use client'
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";


const GoogleAuth = ({label = 'Google দিয়ে চালিয়ে যান'}) => {

      const [isPending, setIsPending] = useState(false);

  const handleGoogle = async () => {
    setIsPending(true);


    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
      newUserCallbackURL: "/",
      errorCallbackURL: "/sign-in",
    });

    if (error) {
      toast.error(error.message || "Google authentication failed");
      setIsPending(false);
    }
  };

    return (
        <div>
            <button
                type="button"
                onClick={handleGoogle}
                
                className="btn btn-outline rounded-lg border-[#cad9cc] bg-white text-sm"
                >
                {isPending ? "Connecting..." : label}
            </button>
        </div>
    );
};

export default GoogleAuth;