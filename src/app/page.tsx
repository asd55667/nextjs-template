"use client";

import useSWR from "swr";
import { LoaderIcon } from "lucide-react";

import { PostPreview } from "@/components/Post";
import {
  AsideBlock,
  AboutMe,
  Category,
  Archives,
  SkeletonGroup,
} from "@/components/PageAside";
import type { IPost } from "@/types/post";
import { fetcher } from "@/utils/fetcher";
import type { ICategory } from "@/types/category";

export default function Home() {
  const { data: categories, isLoading } = useSWR<ICategory>(
    "/api/category/list",
    fetcher
  );

  return (
    <div className="container relative flex min-h-screen py-12 px-36 lg:gap-16 gap-10">
      <Preview />

      <div className="flex-col gap-8 hidden md:flex w-1/5">
        <AsideBlock title="About me">
          <AboutMe />
        </AsideBlock>

        <AsideBlock title="Categories">
          {isLoading ? (
            <SkeletonGroup length={5} />
          ) : !categories?.children.length ? (
            <div>empty</div>
          ) : (
            <Category categories={categories.children} />
          )}
        </AsideBlock>

        <AsideBlock title="Archives">
          <Archives />
        </AsideBlock>
      </div>
    </div>
  );
}

function Preview() {
  const { data: posts, isLoading } = useSWR<IPost[]>(
    "/api/content/recent-posts",
    fetcher
  );

  let content: React.ReactNode;
  if (isLoading) {
    content = (
      <div className="center h-5/6">
        <LoaderIcon className="animate-spin" />
      </div>
    );
  } else if (!posts?.length) content = <div>No post</div>;
  else {
    content = posts?.map((post, idx) => <PostPreview key={idx} post={post} />);
  }

  return (
    <div className="flex flex-col flex-grow gap-2 overflow-auto w-3/4">
      {content}
    </div>
  );
}
