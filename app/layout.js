import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import DialogflowChat from "@/components/DialogflowChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareerWise - AI Mock Interviews",
  description: "Practice with AI-powered mock interviews and get personalized feedback",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col bg-background">
              {children}
            </div>
            <Toaster position="top-center" />
            <DialogflowChat />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
