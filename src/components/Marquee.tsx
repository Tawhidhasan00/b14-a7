
import {  getProducts } from "@/lib/api";
import {  IProducts } from "@/Types/type";

import { getChangeText, getPriceText } from "@/Types/format";

import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"



const Marquee = async() => {

    const products: IProducts[] = await getProducts();
    console.log(products)
    
    return (
        <div className="text-black bg-white">
            <div className="px-2 flex">
                <MarqueeText direction="right" duration={10} 
                            className="py-1">
                    {
                        products.map((product) => 
                            <span key={product.id} className="flex h-9 items-center gap-2 px-5 text-sm">
                                <span aria-hidden="true">{product.image}</span>
                                <strong className="font-medium">{product.nameBn}</strong>
                                <span>{getPriceText(product)}</span>
                                <span
                                className={`font-semibold ${
                                    product.change.dir === "up"
                                    ? "text-[#d03739]"
                                    : product.change.dir === "down"
                                        ? "text-[#1a9951]"
                                        : "text-[#68736a]"
                                }`}
                                >
                                {getChangeText(product)}
                                </span>
                            </span>
                    )
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;