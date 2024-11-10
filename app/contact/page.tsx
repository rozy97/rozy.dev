"use client";

import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Suspense } from 'react';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone (Whatsapp)",
    description: "(+62) 85765688100"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rozy.firmansyah@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jakarta, Indonesia"
  },
]

const SelectComponent = () => {
  const searchParams = useSearchParams()

  const serviceParam = searchParams.get('service')
  const service = serviceParam ? serviceParam : ''
  return (
    <Select defaultValue={service}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Service" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a Service</SelectLabel>
          <SelectItem value="web-dev">Web Development</SelectItem>
          <SelectItem value="api-dev">Backend Development</SelectItem>
          <SelectItem value="cloud-infra">Cloud Infrastructure</SelectItem>
          <SelectItem value="browser-extention">Browser Extention</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const Contact = () => {



  return (
      <section className="py-6">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" action="">
                <h3 className="text-2xl sm:text-4xl text-accent">{`Let's work together`}</h3>
                <p className="text-white/60">{`I'm excited to collaborate with you on creating robust and scalable software solutions. Whether you need assistance with web development, backend development, microservices architecture, or optimizing performance, I'm here to bring your ideas to life. Let's build something amazing together.`}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="First Name" />
                  <Input type="lastname" placeholder="Last Name" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="phone" placeholder="Phone Number" />
                </div>
                <Suspense>
                  <SelectComponent />
                </Suspense>
                <Textarea className="h-[200px]" placeholder="Type your message here." />
                <Button className="max-w-40">Send Message</Button>
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex item-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]" >{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact