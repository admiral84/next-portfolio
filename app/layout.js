import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Full-Stack Web Developer & Computer Science Educator`,
  description: site.description,
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, type: "website", locale: "en_US" },
  twitter: { card: "summary", title: site.name, description: site.description },
};

// Sets the saved theme before first paint to avoid a flash. Defaults to dark.
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
