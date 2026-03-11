"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/lib/site-content";

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="-mx-1 mt-4 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex min-w-max items-center gap-5 text-sm text-text-secondary md:min-w-0 md:flex-wrap">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "border-b border-accent pb-1 font-medium text-text-primary"
                  : "pb-1 transition-colors hover:text-text-primary"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
