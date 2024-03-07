"use client";

import { PostPreview } from "@/components/Post";
import {
  AsideBlock,
  RecentPosts,
  AboutMe,
  Category,
  Archives,
} from "@/components/PageAside";
import { getRecentPost } from "@/api/post";

export default function Home() {
  const { posts } = getRecentPost();

  if (!posts?.length) return <div>Loading</div>;

  return (
    <div className="container relative flex min-h-screen p-8 lg:gap-16 gap-10">
      <div className="flex flex-col flex-grow gap-2 overflow-auto">
        {posts.map((post, idx) => (
          <PostPreview key={idx} post={post} />
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <AsideBlock title="Recent Post">
          <RecentPosts posts={posts} />
        </AsideBlock>

        <AsideBlock title="About me">
          <AboutMe />
        </AsideBlock>

        <AsideBlock title="Category">
          <Category />
        </AsideBlock>

        <AsideBlock title="Archives">
          <Archives />
        </AsideBlock>
      </div>
    </div>
  );
}
