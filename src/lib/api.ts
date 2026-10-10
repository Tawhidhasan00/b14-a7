import { INav, IProducts } from "@/Types/type";

const API_URLS = [
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];


async function getApiData <T> (path: string): Promise<T> {
  for (const baseUrl of API_URLS) {
    try {
      const response = await fetch(`${baseUrl}${path}`, {
        next: { revalidate: 3600 },
      });

      if (response.ok) {
        return response.json() as Promise<T>;
      }
    } catch {
      
    }
  }
  throw new Error("বাজার দরের তথ্য লোড করা যায়নি।");
}


export function getProducts() {
  return getApiData<IProducts[]>("/products");
}

export function getCategories() {
  return getApiData<INav[]>("/categories");
}
