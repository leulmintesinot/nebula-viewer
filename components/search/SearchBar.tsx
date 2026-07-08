"use client";

export default function SearchBar() {
  return (
    <form
      className="mt-10 flex w-full max-w-2xl items-center gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Search for a topic..."
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
      />

      <button
        type="submit"
        className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
      >
        Search
      </button>
    </form>
  );
}