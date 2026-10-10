
import { getCategories, getProducts } from '@/lib/api';
import HeroPage from '../components/Hero';
import ProductSection from '../components/ProductSection';

const HomePage = async() => {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const rise = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fall = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className='bg-base-300 pt-5'>


      <div>
        <HeroPage/>
        <div className='max-w-7xl mx-auto mt-10 mb-10 space-y-15'>
          <ProductSection title="আজ দাম বেড়েছে" trend="up" products={rise} />
          <ProductSection title={`আজ দাম কমেছে`} trend="down" products={fall} />
          <ProductSection
            id="সব-পণ্য"
            title="সব পণ্য"
            subtitle={`মোট ${products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে`}
            products={products}
          />
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;