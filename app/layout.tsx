import "@/app/styles/global.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";

// Raleway font - clean, modern look for portfolios
const raleway = Raleway({ subsets: ["latin"] });

// SEO metadata - update with your information
export const metadata: Metadata = {
  title: {
    template: "Sam Bai - %s",
    default: "Sam Bai - Full Stack Developer",
  },
  description:
    "Sam Bai, full stack developer based in New Zealand. Building modern and scalable web solutions.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "New Zealand",
  ],
  authors: [{ name: "Sam Bai" }],
  openGraph: {
    type: "website",
    title: "Sam Bai - Full Stack Developer",
    description:
      "Building modern and scalable web solutions. Based in New Zealand.",
    siteName: "Sam Bai Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.className} antialiased bg-dark-100 text-stone-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
