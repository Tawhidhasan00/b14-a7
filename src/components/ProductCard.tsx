import { IProducts } from "@/Types/type";
import Link from "next/link";
import { getChangeText, getUnitLabel, toBanglaNumber } from "@/Types/format";


const ProductCard = ({product}: {product: IProducts}) => {

  const changeColor =
    product.change.dir === "up"
      ? " text-[#d03739]"
      : product.change.dir === "down"
        ? "text-[#1a9951]"
        : "text-[#68736a]";

    return (
        <div className="max-w-7xl mx-auto ">
            <Link
            href={`/product/${product.slug}`}
            className=" block min-h-34.5 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#abd6b5] hover:shadow-md"
            >
            <div className="flex items-start gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#eef5ef] text-2xl" aria-hidden="true">
                {product.image}
                </span>
                <div className="min-w-0 flex-1">
                <h3 className="truncate text-base font-semibold group-hover:text-[#05893e]">
                    {product.nameBn}
                </h3>
                <p className="mt-0.5 text-xs text-[#68736a]">{getUnitLabel(product.unit)}</p>
                </div>
            </div>

            <div className="mt-4 flex items-end justify-between gap-3">
                <div>
                <p className="text-xs text-[#68736a]">আজকের দাম</p>
                <p className="text-xl font-bold leading-tight">
                    {toBanglaNumber(product.today)}
                    <span className="ml-1 text-xs font-normal text-[#68736a]">টাকা</span>
                </p>
                </div>
                <span className={`text-xs font-semibold ${changeColor}`}>
                {getChangeText(product)}
                </span>
            </div>
            </Link>
        </div>
    );
};

export default ProductCard;