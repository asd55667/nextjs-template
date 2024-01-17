import Image from "next/image";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitcher />

      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
    </main>
  );
}
