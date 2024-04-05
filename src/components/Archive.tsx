"use client";

import useSWR from "swr";
import React from "react";
import { format } from "date-fns";

import { PaginationFooter } from "@/components/PaginationFooter";
import { IPostPreview } from "@/types/post";
import { fetcher } from "@/utils/fetcher";

interface CategoryPageProps {
  params: {
    slug: string[];
  };
  link: (
    href: string,
    className: string,
    children: string
  ) => React.JSX.Element;
}

export default function ArchivePage({ params, link }: CategoryPageProps) {
  console.log(params);

  const date = params.slug.slice(0, -1);
  const page = params.slug[params.slug.length - 1];

  const { data, isLoading } = useSWR<{ posts: IPostPreview[]; pages: number }>(
    `/api/archive/${date.join("/")}/${page}`,
    fetcher
  );

  if (isLoading) return <div>Loading</div>;
  if (!data) return <div>Error</div>;

  const { posts, pages } = data;

  return (
    <div className="center flex-col gap-4 p-12">
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-4">
            <p>{format(post.created, "yyyy-MM-dd")}</p>

            {link(
              `/post/${post.id}`,
              "inline-block no-underline transition-colors hover:text-foreground text-muted-foreground",
              post.title
            )}
            {/* <Link
              href={`/post/${post.id}`}
              className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
            >
              {post.title}
            </Link> */}
          </div>
        ))}
      </div>

      <PaginationFooter pages={pages} page={+page}></PaginationFooter>
    </div>
  );
}
