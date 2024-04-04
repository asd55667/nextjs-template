"use client";

import useSWR from "swr";
import { LoaderIcon } from "lucide-react";

import { Post } from "@/components/Post";
import { DashboardTableOfContents } from "@/components/Toc";
import { ScrollArea } from "@/ui/scroll-area";
import NotFound from "@/app/not-found";
import { fetcher } from "@/utils/fetcher";
import type { IPost } from "@/types/post";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

export default function PostPage({ params }: PostPageProps) {
  const id = params.slug?.join("/") || "";
  const { data: post, isLoading } = useSWR<IPost>(
    `/api/content/post/${id}`,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="center h-screen">
        <LoaderIcon className="animate-spin" />
      </div>
    );
  }

  if (!post) return <NotFound />;

  return (
    <div className="flex justify-between p-24 md:px-56">
      <Post post={post} />

      {post.toc && (
        <div className="hidden text-sm xl:block w-1/6 min-w-60">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <DashboardTableOfContents toc={post.toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  );
}
