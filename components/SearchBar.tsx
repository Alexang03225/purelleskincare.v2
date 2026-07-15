"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search formulas…",
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-3 border-b border-charcoal pb-2">
      <Search className="h-3.5 w-3.5 text-muted" strokeWidth={1.5} aria-hidden />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-charcoal placeholder:text-muted/55 focus:outline-none"
        aria-label="Search products"
      />
    </div>
  );
}
