"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { signOut } from "@/lib/auth-client";

type SignOutButtonProps = {
    mobile?: boolean;
    menu?: boolean;
};

const SignOutButton = ({ mobile = false, menu = false }: SignOutButtonProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignOut = async() => {
        setIsLoading(true);
        const { error } = await signOut();

        if (error) {
        toast.error(error.message || "সাইন আউট করা যায়নি।");
        setIsLoading(false);
        return;
        }

        toast.success("সফলভাবে সাইন আউট হয়েছে।");
        router.push("/");
        router.refresh();
    }

    return (
        <button
        type="button"
        onClick={handleSignOut}
        disabled={isLoading}
        className={
            menu
            ? "flex min-h-8 w-full items-center gap-2 rounded-lg px-3 py-1.5 text-left text-sm text-[#d03739] transition-colors hover:bg-[#fff0f0] focus-visible:outline-2 focus-visible:outline-[#d03739] disabled:cursor-not-allowed disabled:opacity-60"
            : mobile
                ? "text-left text-[#d03739]"
                : "btn btn-ghost btn-sm h-10 rounded-lg px-3 text-sm text-[#d03739]"
        }
        >
        {isLoading && <span className="loading loading-spinner loading-xs" />}
        {menu && !isLoading && <span aria-hidden="true">↩</span>}
        {isLoading ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}
        </button>
    );
}

export default SignOutButton;