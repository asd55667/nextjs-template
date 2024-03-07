"use client";

import Balance from "react-wrap-balancer";
import Link from "next/link";
import Markdown from "react-markdown";
import { format } from "date-fns";

import type { IPost } from "@/types/post";
import { Separator } from "@/ui/separator";
import { cn } from "@/utils";
import { Badge } from "@/ui/badge";

/**
 *
 * title;
 * date;
 * md content preview;
 * jump to post;
 * @returns
 */
export function PostPreview({ post }: { post: IPost }) {
  return (
    <div>
      <h2 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {post.title}
      </h2>

      <p className="text-lg text-muted-foreground mt-1">{post.description}</p>

      {/* <Markdown className="pb-6 pt-4">{post.content}</Markdown> */}
      <div className="overflow-auto" dangerouslySetInnerHTML={{ __html: post.content }}></div>

      <Link
        href={`/post/${post.id}`}
        target="_self"
        rel="noreferrer"
        className="hover:text-accent-foreground"
      >
        <span className="text-sm italic">Read Full Content »</span>
      </Link>

      <Separator className="my-2" />

      <div className="flex gap-2 justify-end">
        Posted by
        <span>{post.author}</span>
        on
        <span>{format(post.date, "MMMM dd, yyyy")}</span>
      </div>
    </div>
  );
}

/**
 *
 * title;
 * date;
 * md content;
 * tags;
 * category belong;
 * related
 * @returns
 */
export function Post({ post }: { post: IPost }) {
  return (
    <div className="w-full px-24">
      {post.tags.length ? (
        <div className={cn("flex gap-2 mb-2", !post.toc && "justify-end")}>
          {post.tags.map((tag, idx) => (
            <Badge key={idx}> {tag} </Badge>
          ))}
        </div>
      ) : null}

      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        {post.title}
      </h1>

      <Balance className="text-lg text-muted-foreground sm:text-xl">
        {post.description}
      </Balance>

      {/* <Markdown className="pb-6 pt-4">{post.content}</Markdown> */}
      <div className="overflow-auto" dangerouslySetInnerHTML={{ __html: post.content }}></div>

      <div className="flex gap-2 justify-end">
        Updated by
        <span>{post.author}</span>
        on
        <span>{format(post.updated, "MMMM dd, yyyy")}</span>
      </div>
    </div>
  );
}
