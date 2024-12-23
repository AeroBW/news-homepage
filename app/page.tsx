import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

export default function Home() {
  return (
    <main className="space-y-20 sm:grid sm:grid-cols-3 sm:grid-rows-[1fr_auto_auto] sm:gap-8 sm:space-y-0">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
