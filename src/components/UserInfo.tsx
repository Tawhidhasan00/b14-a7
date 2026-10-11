'use client'
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';
import Dropdown from './auth/Dropdown';


const UserInfo = () => {

    const  { data: session, isPending } = useSession();
    const user = session?.user;
    if (isPending) {
        return (
            <div className="ml-auto">
            <span className="loading loading-spinner loading-sm" />
            </div>
        );
    }

    return (
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
            {
                user ?
                <Dropdown name={session.user.name} email={session.user.email}/>
                :
                <div className='flex gap-2'>
                    <Link
                        href="/sign-in"
                        className="btn btn-ghost btn-sm h-10 rounded-lg px-4 text-sm font-semibold">
                        সাইন ইন
                    </Link>
                    <Link
                        href="/sign-up"
                        className="btn btn-sm h-10 rounded-lg border-[#05893e] bg-[#05893e] px-4 text-sm text-white shadow-none hover:border-[#047f39] hover:bg-[#086831]">
                        সাইন আপ
                    </Link>
                </div>
            }

        </div>
    );
};

export default UserInfo;