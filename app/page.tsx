import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import GalaxyPlaceholder from "@/components/galaxy/GalaxyPlaceholder";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />

      <main className="flex flex-1 items-center justify-center px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center">
          <Hero />

          <GalaxyPlaceholder />
        </div>

      </main>

      <Footer />
    </div>
  );
}