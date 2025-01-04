import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = (await params).slug?.join("/") || "";
  const docs = docsConfig.sidebarNav.flatMap((doc) => doc.items);
  const doc = docs.find((doc) => doc.href?.toLowerCase()?.includes(slug));

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc || !doc.href) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.href),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: "@shadcn",
    },
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  return (
    <div className="flex flex-col justify-between py-24 px-8">
      <h1>{doc?.title}</h1>
      Hello Doc {doc?.title}!
    </div>
  );
}
