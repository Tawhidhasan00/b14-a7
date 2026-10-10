import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';

const Header = async() => {


    const date = new Date().toLocaleDateString(
        'bn-BD', {
            dateStyle: 'full'
        }
    )

    return (
        <header className='border-b border-[#e2ebe3] p-2'>
            {/*  */}
            <div className='max-w-7xl mx-auto flex h-17 items-center gap-3'>
                
                <Link href={'/'} className='flex items-center gap-2'>
                    <span className="flex size-9 items-center justify-center rounded-lg bg-[#05893e]">
                        <Image src={'/logo-icon.png'} alt='logo' 
                                height={23}
                                width={23}>
                        </Image>
                    </span>
                    <div>
                        <h2 className='font-bold text-2xl'>বাজার দর</h2>
                        <p className='text-xs text-gray-600'>{date}</p>
                    </div>
                </Link>

                <div className="ml-auto hidden items-center gap-2 sm:flex">
                <Link
                    href="/signin"
                    className="btn btn-ghost btn-sm h-10 rounded-lg px-4 text-sm font-semibold">
                    সাইন ইন
                </Link>
                <Link
                    href="/signup"
                    className="btn btn-sm h-10 rounded-lg border-[#05893e] bg-[#05893e] px-4 text-sm text-white shadow-none hover:border-[#047f39] hover:bg-[#086831]">
                    সাইন আপ
                </Link>
                </div>
            </div>

            {/* Navbar */}
            <div className="border-t border-[#edf2ed]">
                <NavLinks/>
            </div>
        </header>
    );
};

export default Header;