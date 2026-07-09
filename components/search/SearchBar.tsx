"use client";

import { FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export default function SearchBar({
  onSearch,
  isLoading = false,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmed = query.trim();

    if (!trimmed) return;

    onSearch(trimmed);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-2xl gap-3"
    >
      <input
        type="text"
        placeholder="Search YouTube topics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}