'use client'
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";


const GithubAuth = ({label = 'Github দিয়ে চালিয়ে যান'}) => {

      const [isPending, setIsPending] = useState(false);

  const handleGithub = async () => {
    setIsPending(true);


    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
      newUserCallbackURL: "/",
      errorCallbackURL: "/sign-in",
    });

    if (error) {
      toast.error(error.message || "Github authentication failed");
      setIsPending(false);
    }
  };

    return (
        <div>
            <button
                type="button"
                onClick={handleGithub}
                
                className="btn btn-outline rounded-lg border-[#cad9cc] bg-white text-sm"
                >
                {isPending ? "Connecting..." : label}
            </button>           
        </div>
    );
};

export default GithubAuth;