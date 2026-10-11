
import GithubAuth from '@/components/auth/GithubAuth';
import GoogleAuth from '@/components/auth/GoogleAuth';
import SignIn from '@/components/auth/SignIn';
import Link from 'next/link';


const SignInPage = () => {


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
              <SignIn/>

              <div className="divider my-5 text-xs text-[#68736a]">অথবা</div>

              <div className="grid gap-2 sm:grid-cols-2">
                <GoogleAuth/>
                <GithubAuth/>
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