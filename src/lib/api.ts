export const getCategories = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    const data = await res.json();
    return data;
}

export const getProducts = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data = await res.json();
    return data;
}