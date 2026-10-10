import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import UserInfo from './UserInfo';

const Header = async() => {


    const date = new Date().toLocaleDateString(
        'bn-BD', {
            dateStyle: 'full'
        }
    )

    return (
        <header className='border-b border-[#e2ebe3] p-2'>
            
            <div className='max-w-7xl mx-auto flex h-17 items-center gap-3'>
            {/* logo */}    
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

            {/* signin, signup */}
                <UserInfo/>
            </div>

            {/* Navbar */}
            <div className="border-t border-[#edf2ed]">
                <NavLinks/>
            </div>
        </header>
    );
};

export default Header;