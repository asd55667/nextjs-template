"use client";

import { LoaderIcon } from "lucide-react";

import { PostPreview } from "@/components/Post";
import {
  AsideBlock,
  AboutMe,
  Category,
  Archives,
  SkeletonGroup,
} from "@/components/PageAside";
import { getRecentPost } from "@/api/post";
import { getCategoryList } from "@/api/category";

export default function Home() {
  const { categories, isLoading } = getCategoryList();

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
  const { posts, isLoading } = getRecentPost();

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
