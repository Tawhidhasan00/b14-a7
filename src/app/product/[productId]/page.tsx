import { getCategories, getProducts } from "@/lib/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getChangeText, getUnitLabel, getUnitName, toBanglaNumber } from "@/Types/format";

type ProductPageProps = {
  params: Promise<{ productId: string }>;
};


const ProductPage = async({params}: ProductPageProps) => {

    const { productId } = await params;
    const [products] = await Promise.all([
        getProducts(),
        getCategories(),
    ]);
    const product = products.find((item) => item.slug === productId);

    if (!product) notFound();

    const sortedMarkets = [...product.markets].sort(
        (a, b) => (a.min + a.max) / 2 - (b.min + b.max) / 2,
    );
    const minimumMarket = sortedMarkets[0];
    const maximumMarket = sortedMarkets.at(-1)!;
    const minimum = Math.min(...product.markets.map((market) => market.min));
    const maximum = Math.max(...product.markets.map((market) => market.max));
    const average =
        product.markets.reduce((total, market) => total + (market.min + market.max) / 2, 0) /
        product.markets.length;
    const changeColor =
        product.change.dir === "up"
        ? "text-[#d03739]"
        : product.change.dir === "down"
            ? "text-[#1a9951]"
            : "text-[#68736a]";

    return (
      <div className="max-w-7xl mx-auto space-y-6 py-6">
        <nav className="text-sm text-[#68736a]" aria-label="ব্রেডক্রাম্ব">
          <Link href="/" className="hover:text-[#05893e]">হোম</Link>
          <span className="mx-2">/</span>
          <Link href={`/category/${product.category}`} className="hover:text-[#05893e]">
            {product.categoryNameBn}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1d271f]">{product.nameBn}</span>
        </nav>

        <section className="surface-card flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between bg-white rounded-2xl">
          <div className="flex items-center gap-5">
            <span className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-[#eef5ef] text-4xl" aria-hidden="true">
              {product.image}
            </span>
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">{product.nameBn}</h1>
              <p className="mt-1 text-sm text-[#68736a]">
                {getUnitLabel(product.unit)} · {product.categoryNameBn}
              </p>
              <p className="mt-2 text-sm">গতকালের তুলনায় আজ দাম</p>
            </div>
          </div>

          <div className="sm:text-right">
            <p className="text-sm text-[#68736a]">আজকের দাম</p>
            <p className="text-3xl font-bold">{toBanglaNumber(product.today)}</p>
            <p className="text-sm text-[#68736a]">টাকা / {getUnitName(product.unit)}</p>
            <p className={`mt-1 text-sm font-semibold ${changeColor}`}>{getChangeText(product)}</p>
          </div>
        </section>

        <section className="surface-card overflow-hidden bg-white rounded-2xl">
          <div className="p-5 sm:p-6">
            <h2 className="text-lg font-semibold">দামের সারসংক্ষেপ</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <PriceSummary
                label="সর্বনিম্ন দাম"
                value={minimum}
                note={`${minimumMarket.market} বাজারে সবচেয়ে কম`}
                color="text-[#1a9951]"
              />
              <PriceSummary
                label="সর্বাধিক দাম"
                value={maximum}
                note={`${maximumMarket.market} বাজারে সবচেয়ে বেশি`}
                color="text-[#d03739]"
              />
              <PriceSummary
                label="গড় দাম"
                value={average}
                note={`প্রতি ${getUnitName(product.unit)}-এর হিসাবে`}
              />
            </div>
          </div>

          <div className="border-t border-[#dbe7dc] p-5 sm:p-6">
            <h2 className="text-lg font-semibold">বাজারভিত্তিক আজকের দাম</h2>
            <div className="mt-4 overflow-x-auto rounded-lg border border-[#dbe7dc]">
              <table className="table min-w-120 bg-[#fafcfa]">
                <thead className="bg-[#eef5ef] text-sm text-[#1d271f]">
                  <tr>
                    <th>বাজার</th>
                    <th>বিভাগ</th>
                    <th>সর্বনিম্ন</th>
                    <th>সর্বাধিক</th>
                    <th>গড়</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedMarkets.map((market) => (
                    <tr key={`${market.market}-${market.division}`} className="hover:bg-[#f3f8f3]">
                      <td className="font-medium">{market.market}</td>
                      <td>{market.division}</td>
                      <td>{toBanglaNumber(market.min)} টাকা</td>
                      <td>{toBanglaNumber(market.max)} টাকা</td>
                      <td className="font-semibold">
                        {toBanglaNumber((market.min + market.max) / 2)} টাকা
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
};
export default ProductPage;


function PriceSummary({
  label,
  value,
  note,
  color = "text-[#1d271f]",
}: {
  label: string;
  value: number;
  note: string;
  color?: string;
}) {
  return (
    <div className="rounded-lg border border-[#dbe7dc] bg-[#f5f8f5] p-4">
      <p className="text-xs text-[#68736a]">{label}</p>
      <p className={`mt-1 text-2xl font-bold ${color}`}>
        {toBanglaNumber(value)} <span className="text-xs font-normal">টাকা</span>
      </p>
      <p className="mt-2 text-xs text-[#68736a]">{note}</p>
    </div>
  );
}