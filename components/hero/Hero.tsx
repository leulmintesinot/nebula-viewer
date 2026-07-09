import SearchBar from "../search/SearchBar";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center text-center py-12">
      <p className="mb-4 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300">
        Interactive Knowledge Visualization
      </p>

      <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
        Nebula Viewer
      </h1>

      <p className="max-w-3xl text-lg leading-8 text-slate-400">
        Search any topic and explore YouTube videos as interconnected stars inside an immersive 3D galaxy. Discover relationships between ideas instead of scrolling through endless lists.
      </p>

      <SearchBar />

    </section>
  );
}