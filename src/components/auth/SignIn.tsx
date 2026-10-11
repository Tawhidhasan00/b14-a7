'use client'
import { signIn } from '@/lib/auth-client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const SignIn = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {email: string, password: string}
    const {data, error} = await signIn.email({
        ...user,
        callbackURL: '/'
    })
    if(data) {
      toast.success('Sign In successful')
    }
    if(error) {
      toast.error(error.message || 'সাইন ইন করা যায়নি')
    }
  }

    return (
        <div>
            <form 
                onSubmit={onSubmit}
                className="space-y-4">
              <label className="form-control block">
                <span className="mb-1.5 block text-sm font-medium">ইমেইল</span>
                <input
                  name='email'
                  type="email"
                  placeholder="you@example.com"
                  className="input w-full rounded-lg border-[#cad9cc] bg-white focus:border-[#05893e] focus:outline-none"
                />
              </label>

              <label className="form-control block">
                <span className="mb-1.5 block text-sm font-medium">পাসওয়ার্ড</span>
                <input
                  name='password'
                  type="password"
                  placeholder="আপনার পাসওয়ার্ড"
                  className="input w-full rounded-lg border-[#cad9cc] bg-white focus:border-[#05893e] focus:outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn w-full rounded-lg border-[#05893e] bg-[#05893e] text-white shadow-none hover:border-[#047f39] hover:bg-[#047f39]"
              >
                {isSubmitting && <span className="loading loading-spinner loading-xs" />}
                {isSubmitting ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
              </button>
            </form>
        </div>
    );
};

export default SignIn;