"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-1 md:hidden">
      <ModeToggle />
      <Button
        aria-label={open ? "Close menu" : "Open menu"}
        size="icon"
        variant="ghost"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {open ? (
        <div className="fixed inset-x-4 top-16 z-50 rounded-lg border bg-background/95 p-3 shadow-soft-glow backdrop-blur">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-2 w-full" variant="outline" asChild>
              <a href="#login" onClick={() => setOpen(false)}>
                Login
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
