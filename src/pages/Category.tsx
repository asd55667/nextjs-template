"use client";

import React from "react";
import { useParams } from "react-router-dom";

import Category from "@/components/client/Category";
import { Link } from "@/components/client/Link";

export default function CategoryPage() {
  const { category, page } = useParams();
  const params = {
    slug: [category!, page || "1"],
  };

  return <Category params={params} link={Link} />;
}
