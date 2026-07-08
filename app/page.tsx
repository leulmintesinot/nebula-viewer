import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />

      <main className="flex flex-1 items-center justify-center px-6">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}