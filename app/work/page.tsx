import WorkPage from "@/components/pages/WorkPage"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rozy | Work",
  icons: "/favicon.png",
  description: "List of My Work & Projects",
  metadataBase: new URL('https://rozy.dev/work'),
  openGraph: {
    type: "website",
    url: "https://rozy.dev/work",
    title: "Rozy | Work",
    description: "List of My Work & Projects",
    siteName: "Firmansyah Rozy's portfolio site",
    images: 'https://raw.githubusercontent.com/rozy97/rozy.dev/refs/heads/main/public/capture-work.png'
  }
};

const Work = () => {
  return (
    <WorkPage />
  )
}

export default Work