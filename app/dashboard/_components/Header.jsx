"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Header = () => {
  const path = usePathname();

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.span 
            className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            CareerWise
          </motion.span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="/dashboard"
            className={cn(
              "text-sm font-medium transition-all duration-300 hover:text-primary group",
              "text-muted-foreground"
            )}
          >
            <span className="group-hover:translate-y-[-2px] block transition-transform">Dashboard</span>
          </Link>
          {/* <Link
            href="/dashboard/interview"
            className={cn(
              "text-sm font-medium transition-all duration-300 hover:text-primary group",
              "text-muted-foreground"
            )}
          >
            <span className="group-hover:translate-y-[-2px] block transition-transform">Interviews</span>
          </Link> */}
          {/* <Link
            href="/dashboard/question"
            className={cn(
              "text-sm font-medium transition-all duration-300 hover:text-primary group",
              "text-muted-foreground"
            )}
          >
            <span className="group-hover:translate-y-[-2px] block transition-transform">Practice Questions</span>
          </Link> */}
          <Link
            href="/dashboard/trends"
            className={cn(
              "text-sm font-medium transition-all duration-300 hover:text-primary group",
              "text-muted-foreground"
            )}
          >
            <span className="group-hover:translate-y-[-2px] block transition-transform">Trends</span>
          </Link>
          {/* <Link
            href="/dashboard/howit"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              "text-muted-foreground"
            )}
          >
            How It Works
          </Link> */}
          <Link
            href="/dashboard/upgrade"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              "text-muted-foreground"
            )}
          >
            Upgrade
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
