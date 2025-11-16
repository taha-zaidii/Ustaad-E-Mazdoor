"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-black text-xl">U</span>
            </div>
            <span className="text-2xl font-black tracking-tight">Ustaad</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" asChild className="font-medium">
              <Link href="/browse-jobs">Find Work</Link>
            </Button>
            <Button variant="ghost" asChild className="font-medium">
              <Link href="/freelancers">Find Talent</Link>
            </Button>
            <Button variant="ghost" asChild className="font-medium">
              <Link href="/how-it-works">How It Works</Link>
            </Button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" asChild className="font-medium">
              <Link href="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-gradient-accent hover:opacity-90 transition-opacity font-semibold"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-1 border-t border-border/50 animate-fade-in">
            <Link
              href="/browse-jobs"
              className="block py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Work
            </Link>
            <Link
              href="/freelancers"
              className="block py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Talent
            </Link>
            <Link
              href="/how-it-works"
              className="block py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" asChild className="w-full font-medium">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button
                asChild
                className="w-full rounded-full bg-gradient-accent hover:opacity-90 transition-opacity font-semibold"
              >
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
