
import { IProducts } from '@/Types/type';
import ProductCard from './ProductCard';

type ProductSectionProps = {
  id?: string;
  title: string;
  trend?: "up" | "down";
  subtitle?: string;
  products: IProducts[];
};

const ProductSection = ({ id, title, trend, subtitle, products }: ProductSectionProps) => {

  const trendColor =
    trend === "up" ? "text-[#d03739]" : "text-[#1a9951]";

  return (
    <section id={id} className="scroll-mt-4">
        <div className="mb-3">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            {trend && (
              <span className={trendColor} aria-hidden="true">
                {trend === "up" ? "▲" : "▼"}
              </span>
            )}

            <span>{title}</span>
          </h2>
          {subtitle && <p className="mt-1 text-sm text-[#68736a]">{subtitle}</p>}
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {products.map((product) => (
            <div  key={product.id} className='bg-white rounded-2xl'>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
    </section>
    );
};

export default ProductSection;