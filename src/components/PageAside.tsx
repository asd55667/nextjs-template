import React from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";

import type { IPost } from "@/types/post";
import pkg from "@/../package.json";

export interface IAsideBlock {
  title: string;
  children: React.ReactNode;
}

export function AsideBlock({ title, children }: IAsideBlock) {
  return (
    <Card className="lg:w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardContent>{children}</CardContent>
      </CardHeader>
    </Card>
  );
}

export function RecentPosts({ posts }: { posts: IPost[] }) {
  return (
    <>
      {posts.map((post, idx) => (
        <RecentPost post={post} key={idx}></RecentPost>
      ))}
    </>
  );
}

function RecentPost({ post }: { post: IPost }) {
  return (
    <Link
      href={`/post/${post.id}`}
      target="_self"
      rel="noreferrer"
      className="flex gap-4 hover:text-accent-foreground"
    >
      <div className="date">
        {new Date(post.date).getMonth() + 1} {new Date(post.date).getDate()},{" "}
        {new Date(post.date).getFullYear()}
      </div>
      <h4>{post.title}</h4>
    </Link>
  );
}

export function AboutMe() {
  return (
    <p>
      {pkg.author.name}, a developer startsWith front end, want to build
      something interesting
    </p>
  );
}
export function Category() {
  return <>Category</>;
}

export function Archives() {
  return <>Archives</>;
}
