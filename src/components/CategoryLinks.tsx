"use client";

import type { INav } from "@/Types/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

type CategoryLinksProps = {
  categories: INav[];
};

const CategoryLinks = ({
  categories,
}: CategoryLinksProps) => {
  const pathname = usePathname();

  return (
    <nav
      className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2"
      aria-label="পণ্যের বিভাগ"
    >
      {categories.map((category) => {
        const href = `/category/${category.slug}`;

        const isActive =
          pathname === href ||
          pathname.startsWith(`${href}/`);

        return (
          <Link
            key={category.id}
            href={href}
            className={`shrink-0 rounded-md px-3 py-2 text-xs font-semibold transition-colors ${
              isActive
                ? "bg-[#05893e] text-white"
                : "text-[#1d271f] hover:bg-[#e6f3e9] hover:text-[#05893e]"
            }`}
          >
            <span className="mr-1" aria-hidden="true">
              {category.icon}
            </span>

            {category.nameBn}
          </Link>
        );
      })}
    </nav>
  );
};

export default CategoryLinks;