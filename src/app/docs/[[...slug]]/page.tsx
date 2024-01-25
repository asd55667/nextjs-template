import type { Metadata } from "next";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/utils";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
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
  const doc = getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.href!),
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

export default function DocPage({ params }: DocPageProps) {
  const doc = getDocFromParams({ params });

  return (
    <div className="flex flex-col items-center justify-between p-24">
      Hello Doc {doc?.title}!
    </div>
  );
}
