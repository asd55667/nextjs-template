import type { IPost } from "@/types/post";
import { siteConfig } from "@/config/site";
import { Post } from "@/components/Post";
import { DashboardTableOfContents } from "@/components/Toc";
import { ScrollArea } from "@/ui/scroll-area";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPost({ params }: PostPageProps): Promise<IPost> {
  const id = params.slug?.join("/") || "";
  const res = await fetch(`${siteConfig.host}/content/post/${id}`);

  return res.json();
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost({ params });

  return (
    <div className="flex items-center justify-between p-24">
      <Post post={post} />

      {post.toc && (
        <div className="hidden text-sm xl:block">
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
