import Image from "next/image";

import type { IPost } from "@/types/post";
import { PostPreview } from "@/components/Post";
import {
  AsideBlock,
  RecentPosts,
  AboutMe,
  Category,
  Archives,
} from "@/components/PageAside";

const post: IPost = {
  id: 0,
  title: "Post Title",
  description: "description for post",
  date: Date.now(),
  content: `This is **NOT** a component library. It's a collection of re-usable components that you can copy and paste into your apps.

  **What do you mean by not a component library?**
  
  I mean you do not install it as a dependency. It is not available or distributed via npm.
  
  Pick the components you need. Copy and paste the code into your project and customize to your needs. The code is yours.
  
  _Use this as a reference to build your own component libraries._ `,
  author: "wcw",
  tags: [],
  category: [],
  related: [],
  updated: 1590729180000,
};

export default function Home() {
  const posts: IPost[] = Array.from({ length: 3 }, (_, id) => ({
    ...post,
    title: post.title + " " + id,
    id,
  }));

  return (
    <div className="flex min-h-screen p-24 lg:gap-16 gap-10">
      <div className="flex flex-col flex-grow gap-2">
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
