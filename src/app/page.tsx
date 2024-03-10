"use client";

import { PostPreview } from "@/components/Post";
import {
  AsideBlock,
  AboutMe,
  Category,
  Archives,
} from "@/components/PageAside";
import { getRecentPost } from "@/api/post";
import { getCategoryList } from "@/api/category";

export default function Home() {
  const { posts } = getRecentPost();
  const { categories } = getCategoryList();

  if (!posts?.length || !categories?.children.length) return <div>Loading</div>;

  return (
    <div className="container relative flex min-h-screen py-12 px-36 lg:gap-16 gap-10">
      <div className="flex flex-col flex-grow gap-2 overflow-auto">
        {posts.map((post, idx) => (
          <PostPreview key={idx} post={post} />
        ))}
      </div>

      <div className="flex-col gap-8 hidden md:flex">
        <AsideBlock title="About me">
          <AboutMe />
        </AsideBlock>

        <AsideBlock title="Categories">
          <Category categories={categories.children} />
        </AsideBlock>

        <AsideBlock title="Archives">
          <Archives />
        </AsideBlock>
      </div>
    </div>
  );
}
