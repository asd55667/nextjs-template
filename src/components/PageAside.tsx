import React from "react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

import type { ICategory } from "@/types/category";
import { cn } from "@/utils";
import pkg from "@/../package.json";

export interface IAsideBlock {
  title: string;
  children: React.ReactNode;
}

export function AsideBlock({ title, children }: IAsideBlock) {
  return (
    <Card className="min-w-60">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardContent>{children}</CardContent>
      </CardHeader>
    </Card>
  );
}

export function AboutMe() {
  return (
    <p>
      {pkg.author.name}, a developer startsWith front end, want to build
      something interesting
    </p>
  );
}

interface ICategoryProps {
  categories: ICategory[];
  level?: number;
  activeItem?: string;
  scope?: string;
}

export function Category({
  categories,
  level = 1,
  scope = "/category",
  activeItem,
}: ICategoryProps) {
  return (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {categories.map((category, index) => (
        <li key={index} className={cn("mt-0 pt-2")}>
          <div className="flex items-center gap-2">
            <Link
              href={`${scope}/${category.key}/1`}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground",
                category.key === `#${activeItem}`
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {category.title}
            </Link>

            <div>{category.total}</div>
          </div>

          {category.children.length ? (
            <Category
              categories={category.children}
              level={level + 1}
              scope={`${scope}/${category.key}`}
              activeItem={activeItem}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function Archives() {
  return <>Archives</>;
}
