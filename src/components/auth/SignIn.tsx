"use client";

import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import toast from "react-hot-toast";

type SignInProps = {
  showProtectedToast?: boolean;
};

const SignIn = ({ showProtectedToast = false }: SignInProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const protectedToastShown = useRef(false);

  useEffect(() => {
    if (showProtectedToast && !protectedToastShown.current) {
      protectedToastShown.current = true;
      toast.error("এই পেজটি দেখতে আগে সাইন ইন করুন।");
    }
  }, [showProtectedToast]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!email || !password) {
      toast.error("ইমেইল এবং পাসওয়ার্ড লিখুন।");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "সাইন ইন করা যায়নি।");
        return;
      }

      toast.success("সাইন ইন সফল হয়েছে।");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("সার্ভারের সঙ্গে যোগাযোগ করা যায়নি।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="form-control block">
        <span className="mb-1.5 block text-sm font-medium">ইমেইল</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="input w-full rounded-lg border-[#cad9cc] bg-white focus:border-[#05893e] focus:outline-none"
        />
      </label>

      <label className="form-control block">
        <span className="mb-1.5 block text-sm font-medium">পাসওয়ার্ড</span>
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="আপনার পাসওয়ার্ড"
          className="input w-full rounded-lg border-[#cad9cc] bg-white focus:border-[#05893e] focus:outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn w-full rounded-lg border-[#05893e] bg-[#05893e] text-white shadow-none hover:border-[#047f39] hover:bg-[#047f39] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting && <span className="loading loading-spinner loading-xs" />}
        {isSubmitting ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
      </button>
    </form>
  );
};

export default SignIn;
