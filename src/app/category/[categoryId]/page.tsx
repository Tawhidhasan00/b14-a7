import CategoryProduct from "@/components/CategoryProduct";
import { getCategories, getProducts } from "@/lib/api";
import { notFound } from "next/navigation";

type CategoryPageProps = {
  params: Promise<{ categoryId: string }>;
};

const CategoryPage = async({params}: CategoryPageProps ) => {

    const { categoryId } = await params;
    const [products, categories] = await Promise.all([
        getProducts(),
        getCategories(),
    ]);
    const category = categories.find((item) => item.slug === categoryId);
    if (!category) notFound();

    const categoryProducts = products.filter((product) => product.category === categoryId);
    if (categoryProducts.length === 0) {
    notFound();
    }
    
    return (
        <div className=" ">
            <div className="max-w-7xl mx-auto py-5">
                <section className=" flex min-h-23.5 items-center gap-4 bg-white rounded-2xl px-4">
                <span className="flex size-14 items-center justify-center rounded-xl bg-[#e6f3e9] text-3xl" aria-hidden="true">
                    {category.icon}
                </span>
                <div>
                    <h1 className="text-2xl font-bold">{category.nameBn}</h1>
                    <p className="mt-1 text-sm text-[#68736a]">
                    {categoryProducts.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
                </section>

                <section className="mt-6">
                <CategoryProduct products={categoryProducts} />
                </section>
            </div>
        </div>
    );
};

export default CategoryPage;