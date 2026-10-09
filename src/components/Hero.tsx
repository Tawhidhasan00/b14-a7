import Image from 'next/image';
import Link from 'next/link';

const HeroPage = () => {

    const date = new Date().toLocaleDateString(
        'bn-BD', {
            dateStyle: 'full'
        }
    )
    return (
        <section className='max-w-7xl mx-auto flex justify-between bg-white rounded-2xl my-8
                            px-4 py-8 sm:px-8 md:grid-cols-[1fr_340px] md:items-center md:py-0 '>
            <div className="max-w-2xl space-y-2 py-5">
                <span className='px-2 rounded-xl text-green-500 bg-green-200 text-sm '>{date}</span>
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl mt-3">
                    আজকের বাজারের দাম এক নজরে
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#536057] sm:text-base">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                    বিস্তারিত, গড়, সর্বনিম্ন ও সর্বাধিক মূল্য দেখুন।
                </p>
                <Link
                    href="#সব-পণ্য"
                    className="btn btn-sm mt-6 mb-8 h-10 rounded-lg border-[#05893e] bg-[#05893e] 
                            px-5 text-white shadow-none hover:border-[#047f39] hover:bg-[#047f39] sm:btn-md">
                    সব পণ্য দেখুন
                </Link>
            </div>
            <div>
                <Image src='/bazar-hero.png' alt='Banner' 
                        width={300}
                        height={400}></Image>
            </div>
        </section>
    );
};

export default HeroPage;