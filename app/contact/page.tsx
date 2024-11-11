import ContactPage from "@/components/pages/Contact"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rozy | Contact",
  icons: "/favicon.png",
  description: "I'm excited to collaborate with you on creating robust and scalable software solutions.",
  metadataBase: new URL('https://rozy.dev/contact'),
  openGraph: {
    type: "website",
    url: "https://rozy.dev/contact",
    title: "Rozy | Contact",
    description: "I'm excited to collaborate with you on creating robust and scalable software solutions.",
    siteName: "Firmansyah Rozy's portfolio site",
    images: 'https://raw.githubusercontent.com/rozy97/rozy.dev/refs/heads/main/public/capture-contact.png'
  }
};

const Contact = () => {
  return (
    <ContactPage />
  )
}

export default Contact