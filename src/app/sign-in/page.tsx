'use client'
import { signIn } from '@/lib/auth-client';
import Link from 'next/link';

const SignInPage = () => {

  const onSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {email: string, password: string}
    const {data, error} = await signIn.email({
        ...user,
        callbackURL: '/'
    })
  }

    return (
      <div>
        <div className="mx-auto w-full max-w-md px-4 py-10">
          <div className="mb-5 text-center">
            <h1 className="text-2xl font-bold">আপনার অ্যাকাউন্টে সাইন ইন করুন</h1>
            <p className="mt-1 text-sm text-[#68736a]">
              বিস্তারিত বাজারদর দেখতে সাইন ইন করুন।
            </p>
          </div>

          <div className="surface-card p-6 bg-white rounded-2xl">
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
                className="btn w-full rounded-lg border-[#05893e] bg-[#05893e] text-white shadow-none hover:border-[#047f39] hover:bg-[#047f39]"
              >
                সাইন ইন
              </button>
            </form>

            <div className="divider my-5 text-xs text-[#68736a]">অথবা</div>

            <div className="grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                className="btn btn-outline rounded-lg border-[#cad9cc] bg-white text-sm"
              >
                Google দিয়ে চালিয়ে যান
              </button>
              <button
                type="button"
                className="btn btn-outline rounded-lg border-[#cad9cc] bg-white text-sm"
              >
                GitHub দিয়ে চালিয়ে যান
              </button>
            </div>

            <p className="mt-5 text-sm text-[#68736a]">
              অ্যাকাউন্ট নেই?{" "}
              <Link href="/sign-up" className="font-semibold text-[#05893e]">
                সাইন আপ করুন
              </Link>
            </p>
          </div>

          <Link href="/" className="mt-5 block text-center text-sm text-gray-600 hover:text-[#05893e]">
            ← হোম পেজে ফিরে যান
          </Link>
        </div>           
      </div>
    );
};

export default SignInPage;