
import { getCategories } from '@/lib/api';
import { INav } from '@/Types/type';
import Link from 'next/link';

type HeaderProps = {
  activeCategory?: string;
};

const NavLinks = async({ activeCategory }: HeaderProps) => {

    const navs: INav[] = await getCategories();

    return (
        <div className='max-w-7xl mx-auto p-1 h-7.5 flex gap-5 justify-start my-2'>
            
          {navs.map((category) => {
            const isActive = activeCategory === category.slug;

            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`shrink-0 rounded-md px-3 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? "bg-[#05893e] text-white"
                    : "hover:bg-[#e6f3e9] hover:text-[#05893e]"
                }`}
              >
                <span className="mr-1" aria-hidden="true">{category.icon}</span>
                {category.nameBn}
              </Link>
            );
          })}
        </div>
    );
};

export default NavLinks;