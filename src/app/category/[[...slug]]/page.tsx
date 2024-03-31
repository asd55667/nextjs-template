"use client";

import { format } from "date-fns";
import Link from "next/link";

import { getPostInCategory } from "@/api/category";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/ui/pagination";

interface CategoryPageProps {
  params: {
    slug: string[];
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.slug.slice(0, -1);
  const page = params.slug[params.slug.length - 1];

  const { posts, pages } = getPostInCategory(category.join("/"), page);

  if (!posts?.length) return <div>Loading</div>;

  return (
    <div className="center flex-col gap-4 p-12">
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-4">
            <p>{format(post.updated, "yyyy-MM-dd")}</p>

            <Link
              href={`/post/${post.id}`}
              className="inline-block no-underline transition-colors hover:text-foreground"
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>

      <PaginationFooter pages={pages} page={+page}></PaginationFooter>
    </div>
  );
}

function PaginationFooter({ pages, page }: { pages: number; page: number }) {
  if (pages <= 1) return null;

  const category = location.pathname.split("/").slice(0, -1).join("/");

  const getPageNumber = (array: number[]) =>
    array.map((idx) => (
      <PaginationItem key={idx}>
        <PaginationLink href={`${category}/${idx}`} isActive={idx === page}>
          {idx}
        </PaginationLink>
      </PaginationItem>
    ));

  if (pages <= 5)
    return (
      <Pagination>
        <PaginationContent>
          {getPageNumber(Array.from({ length: pages }, (_, i) => i + 1))}
        </PaginationContent>
      </Pagination>
    );

  // visible num of pages
  const n = 3;
  const getEllipsis = (i = 0) => (
    <PaginationItem key={"ellipsis" + i}>
      <PaginationEllipsis />
    </PaginationItem>
  );

  let child: JSX.Element[] = [];

  if (page <= n) {
    // 1,2,3  ...
    child = getPageNumber(Array.from({ length: n }, (_, i) => i + 1));
    child.push(getEllipsis(0));
  } else if (pages - page <= n) {
    // ... 8,9,10
    child = getPageNumber(
      Array.from({ length: n }, (_, i) => pages + i + 1 - n)
    );
    child.unshift(getEllipsis(0));
  } else {
    // ... 5,6,7 ...
    child = getPageNumber(
      Array.from({ length: n }, (_, i) => page + i + 2 - n)
    );
    child.push(getEllipsis(0));
    child.unshift(getEllipsis(1));
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`${category}/${page - 1}`} />
        </PaginationItem>

        {child}

        <PaginationItem>
          <PaginationNext href={`${category}/${page + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
