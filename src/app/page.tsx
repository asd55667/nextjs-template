import { cn } from "@/utils"

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] my-4",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "max-w-2xl text-balance text-lg font-light text-foreground my-2",
        className
      )}
      {...props}
    />
  )
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex gap-8 justify-between py-[5vh] px-[10vw]">
      <div className="flex flex-col flex-none">
        <PageHeaderHeading>Hello,</PageHeaderHeading>

        <PageHeaderHeading className="text-2xl">
          My name is <span className="underline" title="wuchengwei">wcw</span>.
        </PageHeaderHeading>

        <PageHeaderDescription>
          a dreamer, coding with passion.
        </PageHeaderDescription>

        <PageHeaderDescription>
          You can find me on ...
        </PageHeaderDescription>
        
      </div>
    </div>
  );
}
