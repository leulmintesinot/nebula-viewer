export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-white">
          Nebula Viewer
        </h1>

        <span className="text-sm text-slate-400">
          Portfolio Project
        </span>
      </div>
    </header>
  );
}