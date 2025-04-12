"use client";

import React, { useState, createContext } from "react";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ModeToggle";
import Header from "./_components/Header";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const WebCamContext = createContext();

const DashboardLayout = ({ children }) => {
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  return (
    <WebCamContext.Provider value={{ webCamEnabled, setWebCamEnabled }}>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <aside className="md:col-span-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card/50 backdrop-blur-sm rounded-xl shadow-lg p-6 sticky top-24 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col space-y-4">
                  <a href="/dashboard" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 group">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform">Dashboard</span>
                  </a>
                  <a href="/dashboard/interview" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 group">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform">Interviews</span>
                  </a>
                  <a href="/dashboard/question" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 group">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform">Practice Questions</span>
                  </a>
                  <a href="/dashboard/howit" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>How It Works</span>
                  </a>
                  
                </div>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <ModeToggle />
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </div>
              </motion.div>
            </aside>
            <main className="md:col-span-9">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                {children}
              </motion.div>
            </main>
          </div>
        </div>
      </div>
    </WebCamContext.Provider>
  );
};

export default DashboardLayout;
