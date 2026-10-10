import { INav, IProducts } from "@/Types/type";

export const getCategories = async(): Promise<INav[]> => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories',
        {next: {revalidate: 300}}
    );
    if (!res.ok) {
        throw new Error(`Categories API failed: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
}

export const getProducts = async(): Promise<IProducts[]> => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products',
        {next: {revalidate: 300}}
    );
    if (!res.ok) {
        throw new Error(`Products API failed: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
}