import React from "react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

import type { ICategory } from "@/types/category";
import { cn } from "@/utils";
import pkg from "@/../package.json";
import { getArchiveList } from "@/api/archive";

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
  scope?: string;
}

export function Category({
  categories,
  level = 1,
  scope = "/category",
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
                "text-muted-foreground"
              )}
            >
              {category.title}
            </Link>

            <div>({category.total})</div>
          </div>

          {category.children.length ? (
            <Category
              categories={category.children}
              level={level + 1}
              scope={`${scope}/${category.key}`}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function Archives() {
  const { list, isLoading } = getArchiveList();

  if (isLoading) return <div>Loading</div>;
  if (!list?.length) return <div>Loading</div>;

  return (
    <ul className="m-0 list-none">
      {list.map((archive, index) => (
        <li key={index} className={cn("mt-0 pt-2")}>
          <ul className="m-0 list-none pl-4">
            {archive.months.map((month, idx) => (
              <li key={idx} className={cn("mt-0 pt-2")}>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/archive/${archive.year}/${month.month + 1}/1`}
                    className={cn(
                      "inline-block no-underline transition-colors hover:text-foreground",
                      "text-muted-foreground"
                    )}
                  >
                    {archive.year} /{" "}
                    {month.month < 9 ? "0" + (month.month + 1) : month.month}
                  </Link>
                  <div>({month.posts.length})</div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
