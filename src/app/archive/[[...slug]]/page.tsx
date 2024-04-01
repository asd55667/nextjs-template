"use client";

import { format } from "date-fns";
import Link from "next/link";

import { getArchive } from "@/api/archive";
import { PaginationFooter } from "@/components/PaginationFooter";

interface CategoryPageProps {
  params: {
    slug: string[];
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.slug.slice(0, -1);
  const page = params.slug[params.slug.length - 1];

  const { posts, pages } = getArchive(category.join("/"), page);

  if (!posts?.length) return <div>Loading</div>;

  return (
    <div className="center flex-col gap-4 p-12">
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-4">
            <p>{format(post.created, "yyyy-MM-dd")}</p>

            <Link
              href={`/post/${post.id}`}
              className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
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
