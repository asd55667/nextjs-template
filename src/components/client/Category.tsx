"use client";

import useSWR from "swr";
import { format } from "date-fns";

import { PaginationFooter } from "@/components/PaginationFooter";
import { fetcher } from "@/utils/fetcher";
import { IPost } from "@/types/post";
import type { PageProps } from "@/types";

export default function CategoryPage({ params, link }: PageProps) {
  const category = params.slug.slice(0, -1);
  const page = params.slug[params.slug.length - 1];

  const { data, isLoading } = useSWR<{ posts: IPost[]; pages: number }>(
    `/api/category/${category.join("/")}/${page}`,
    fetcher
  );

  if (isLoading) return <div>Loading</div>;
  if (!data) return <div>Not Found</div>;

  const { posts, pages } = data;

  return (
    <div className="center flex-col gap-4 p-12">
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-4">
            <p>{format(post.updated, "yyyy-MM-dd")}</p>

            {link(`/post/${post.id}`, post.title)}
          </div>
        ))}
      </div>

      <PaginationFooter pages={pages} page={+page}></PaginationFooter>
    </div>
  );
}
