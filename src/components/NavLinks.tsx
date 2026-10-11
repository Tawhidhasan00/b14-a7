import { getCategories } from "@/lib/api";
import CategoryLinks from "./CategoryLinks";

const NavLinks = async () => {
  const categories = await getCategories();

  return <CategoryLinks categories={categories} />;
};

export default NavLinks;