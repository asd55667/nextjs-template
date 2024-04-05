"use client";

import React from "react";
import { useParams } from "react-router-dom";

import Archive from "@/components/client/Archive";
import { Link } from "@/components/client/Link";

export default function ArchivePage() {
  const { year, month, page } = useParams();
  const params = {
    slug: [year!, month!, page || "1"],
  };

  return <Archive params={params} link={Link} />;
}
