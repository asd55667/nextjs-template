"use client";

import React from "react";
import { useParams } from "react-router-dom";

import Post from "@/components/client/Post";
import { Link } from "@/components/client/Link";

export default function PostPage() {
  const { id } = useParams();
  const params = {
    slug: [id!],
  };

  return <Post params={params} link={Link} />;
}
