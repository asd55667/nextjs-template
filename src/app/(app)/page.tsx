import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card";
import { FileText, Keyboard, Palette } from "lucide-react";
import type React from "react"; // Added import for React

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <main className="container mx-auto px-4 py-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">Nextjs Template</h1>
        <p className="text-xl text-muted-foreground max-w-2xl text-center mb-12">
          A simple template just based on the website of shadcn/ui.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-4xl mb-12">
          <FeatureCard
            icon={<Palette className="h-6 w-6" />}
            title="Design and Layout"
            description="Utilizes the clean and modern design principles of shadcn/ui."
          />
          <FeatureCard
            icon={<Palette className="h-6 w-6" />}
            title="Dark Mode"
            description="Seamless dark mode integration for improved user experience."
          />
          <FeatureCard
            icon={<Keyboard className="h-6 w-6" />}
            title="Command Menu (⌘ K)"
            description="Quick access to actions with a sleek command menu."
          />
          <FeatureCard
            icon={<FileText className="h-6 w-6" />}
            title="MDX with Contentlayer"
            description="Easy content management using MDX and Contentlayer."
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
