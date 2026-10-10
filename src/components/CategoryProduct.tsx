'use client'
import { IProducts } from '@/Types/type';
import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';

type SortOption = "default" | "low-to-high" | "high-to-low";

const CategoryProduct = ({products}: {products: IProducts[]}) => {

    const [sortBy, setSortBy] = useState<SortOption>("default");
    const sortedProducts = useMemo(() => {
        const copy = [...products];

        if (sortBy === "low-to-high") return copy.sort((a, b) => a.today - b.today);
        if (sortBy === "high-to-low") return copy.sort((a, b) => b.today - a.today);
        return copy;
    }, [products, sortBy]);

    return (
    <div className=''>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#68736a]">
          মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>

        <label className="flex items-center gap-2 text-sm">
          <span>সাজান</span>
          <select
            className="select select-sm w-full rounded-lg border-[#cad9cc] bg-[#fafcfa] focus:border-[#05893e] focus:outline-none sm:w-56"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-to-high">দাম: কম থেকে বেশি</option>
            <option value="high-to-low">দাম: বেশি থেকে কম</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
            <div key={product.id} className='bg-white rounded-2xl'>
                <ProductCard product={product} />
            </div>
        ))}
      </div>
    </div>
    );
};

export default CategoryProduct;