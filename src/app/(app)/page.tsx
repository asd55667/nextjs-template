import Image from "next/image";
import Link from "next/link";

import { Announcement } from "@/components/announcement";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { docsConfig } from "@/config/docs";
import { Button } from "@/registry/new-york/ui/button";

export default function IndexPage() {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Made with Tailwind CSS. Open source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href={{ pathname: `${docsConfig.name}` }}>Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href={{ pathname: `${docsConfig.name}` }}>Browse Blocks</Link>
          </Button>
        </PageActions>
      </PageHeader>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <div className="[&>a:first-child]:text-primary">Examples Nav</div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="container py-6">
          <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
            <Image
              src="/examples/cards-light.png"
              width={1280}
              height={1214}
              alt="mobile demo light"
              className="block dark:hidden"
            />
            <Image
              src="/examples/cards-dark.png"
              width={1280}
              height={1214}
              alt="mobile demo dark"
              className="hidden dark:block"
            />
          </section>
          <section className="hidden md:block [&>div]:p-0">
            Example Demo
          </section>
        </div>
      </div>
    </>
  );
}
