export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-lg font-bold text-white">
            Nebula Viewer
          </h1>

          <p className="text-xs text-slate-400">
            Explore knowledge visually
          </p>
        </div>

        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
          Portfolio Project
        </span>
      </div>
    </header>
  );
}