import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />

      <main className="flex flex-1 items-center justify-center px-6">
        <h2 className="text-4xl font-bold text-white">
          Main Content Coming Soon
        </h2>
      </main>

      <Footer />
    </div>
  );
}