"use client";

import useSWR from "swr";
import React from "react";
import { format } from "date-fns";

import { PaginationFooter } from "@/components/PaginationFooter";
import { IPostPreview } from "@/types/post";
import { fetcher } from "@/utils/fetcher";
import type { PageProps } from "@/types";

export default function ArchivePage({ params, link }: PageProps) {
  const date = params.slug.slice(0, -1);
  const page = params.slug[params.slug.length - 1] || 1;

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

            {link(`/post/${post.id}`, post.title)}
          </div>
        ))}
      </div>

      <PaginationFooter pages={pages} page={+page}></PaginationFooter>
    </div>
  );
}
