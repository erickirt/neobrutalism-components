import "@/styling/globals.css"

import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"

import Navbar from "@/components/app/Navbar"
import ScrollToTop from "@/components/app/ScrollToTop"
import SetStylingPref from "@/components/app/SetStylingPref"
import { ThemeProvider } from "@/components/app/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default:
      "Neobrutalism components - Start making neobrutalism layouts today",
    template: `%s - Neobrutalism components`,
  },
  description:
    "A collection of neobrutalism-styled components based on shadcn/ui.",
  keywords: [
    "neobrutalism",
    "neobrutalism components",
    "neobrutalism tailwind",
    "react neobrutalism",
    "react tailwind components",
    "shadcn components",
    "shadcn neobrutalism",
  ],
  authors: [{ name: "Samuel Breznjak", url: "https://github.com/ekmas" }],
  openGraph: {
    type: "website",
    description:
      "A collection of neobrutalism-styled components based on shadcn/ui.",
    images: ["https://www.neobrutalism.dev/preview.png"],
    url: "https://www.neobrutalism.dev/",
    title: "Neobrutalism components",
  },
  metadataBase: new URL("https://www.neobrutalism.dev/"),
  twitter: {
    card: "summary_large_image",
    title: "Neobrutalism components - Start making neobrutalism layouts",
    description:
      "A collection of neobrutalism-styled components based on shadcn/ui.",
    images: ["https://www.neobrutalism.dev/preview.png"],
    creator: "@samuelbreznjak",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning lang="en">
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <SetStylingPref />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
