export interface PageProps {
  params: {
    slug: string[];
  };
  link: (href: string, title: string, className?: string) => React.JSX.Element;
}
