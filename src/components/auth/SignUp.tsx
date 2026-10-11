'use client'
import {  signUp } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SignUp = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string, confirmPassword: string}

    const {data, error} = await signUp.email({
        ...user,
    })
    if(data) {
        toast.success('Sign In successful')
        redirect('/')
    }
    if (user.password !== user.confirmPassword) {
        toast.error("পাসওয়ার্ড দুটি মেলেনি।");
        return;
    }

    if(error) {
      toast.error(error.message || "সাইন আপ করা যায়নি।")
    }
    setIsSubmitting(true);
  };

    return (
        <div>
            <form className="space-y-3.5" onSubmit={onSubmit}>
                <label className="form-control block">
                <span className="mb-1.5 block text-sm font-medium">নাম</span>
                <input
                    name='name'
                    type="text"
                    required
                    minLength={2}
                    autoComplete="name"
                    placeholder="যেমন: রহিম উদ্দিন"
                    className="input w-full rounded-lg border-[#cad9cc] bg-white focus:border-[#05893e] focus:outline-none"
                />
                </label>

                <label className="form-control block">
                <span className="mb-1.5 block text-sm font-medium">ইমেইল</span>
                <input
                    name='email'
                    type="email"
                    required
                    autoComplete='email'
                    placeholder="you@example.com"
                    className="input w-full rounded-lg border-[#cad9cc] bg-white focus:border-[#05893e] focus:outline-none"
                />
                </label>

                <label className="form-control block">
                <span className="mb-1.5 block text-sm font-medium">পাসওয়ার্ড</span>
                <input
                    name='password'
                    type="password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder="কমপক্ষে ৮ অক্ষর"
                    className="input w-full rounded-lg border-[#cad9cc] bg-white focus:border-[#05893e] focus:outline-none"
                />
                </label>

                <label className="form-control block">
                <span className="mb-1.5 block text-sm font-medium">
                    পাসওয়ার্ড নিশ্চিত করুন
                </span>
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="আবার লিখুন"
                    className="input w-full rounded-lg border-[#cad9cc] bg-white focus:border-[#05893e] focus:outline-none"
                />
                </label>
                <button
                type="submit"
                disabled={isSubmitting}
                className="btn mt-1 w-full rounded-lg border-[#05893e] bg-[#05893e] text-white shadow-none hover:border-[#047f39] hover:bg-[#047f39] disabled:cursor-not-allowed disabled:opacity-60"
                >
                {isSubmitting && (
                    <span className="loading loading-spinner loading-xs" />
                )}

                {isSubmitting ? "সাইন আপ হচ্ছে..." : "সাইন আপ"}
                </button>
            </form>
        </div>
    );
};

export default SignUp;