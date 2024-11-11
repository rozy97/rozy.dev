import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rozy | Services",
  icons: "/favicon.png",
  description: "List of available services that I provide",
  metadataBase: new URL('https://rozy.dev/services'),
  openGraph: {
    type: "website",
    url: "https://rozy.dev/services",
    title: "Rozy | Services",
    description: "List of available services that I provide",
    siteName: "Firmansyah Rozy's portfolio site",
    images: 'https://raw.githubusercontent.com/rozy97/rozy.dev/refs/heads/main/public/capture-services.png'
  }
};

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Build high-quality, responsive websites tailored to your business needs. Services include front-end and back-end development, UI/UX design, and optimizing for SEO. Flexible project management, clear communication, and on-time delivery are priorities, ensuring a seamless client experience.',
    href: "/contact?service=web-dev"
  },
  {
    num: '02',
    title: 'API Development & Integration',
    description: 'Design, develop, and integrate APIs to facilitate seamless data exchange between your applications and external systems. Ensuring secure, scalable, and efficient endpoints to connect various services.',
    href: "/contact?service=api-dev"
  },
  {
    num: '03',
    title: 'Backend Development & Architecture',
    description: 'Build robust backend systems that are scalable and secure. Expertise in designing and implementing architectures like microservices, RESTful services, and event-driven structures to handle high-traffic applications.',
    href: "/contact?service=api-dev"
  },
  {
    num: '04',
    title: 'Cloud Infrastructure & Deployment',
    description: 'Set up, manage, and optimize cloud infrastructure to ensure high availability and reliability. Proficient in deploying and maintaining applications on platforms like AWS, Azure, and Google Cloud, utilizing best practices for DevOps and CI/CD.',
    href: "/contact?service=cloud-infra"
  },


]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  ><BsArrowDownRight className="text-primary text-3xl" /></Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500" >{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services