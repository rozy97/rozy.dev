"use client";

import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendMessage } from '@/lib/telegram';


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
import { Suspense, FormEvent, useState } from 'react';
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from '@/components/ui/toast';

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

const SelectComponent = ({ name, value, handleChange }: { name: string, value: string, handleChange: (value: string) => void }) => {
  const searchParams = useSearchParams()

  const serviceParam = searchParams.get('service')
  const service = serviceParam ? serviceParam : ''
  let v = ''
  if (value === '') {
    v = service
  } else if (value != 'void') {
    v = value
  }

  return (
    <Select name={name} defaultValue={service} value={v} onValueChange={handleChange} required >
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

const ContactPage = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value // Handle service select change
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const firstname = formData.get("firstname")?.toString() || ''
    const lastname = formData.get("lastname")?.toString()  || ''
    const email = formData.get("email")?.toString()  || ''
    const phone = formData.get("phone")?.toString()  || ''
    const service = formData.get("service")?.toString()  || ''
    const message = formData.get("message")?.toString()  || ''
    sendMessage({firstname, lastname, email, phone, service, message}).then(() => {
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: 'void',
        message: ''
      });

      toast({
        variant: "default",
        title: "Your message has been sent.",
        description: "",
        action: (
          <ToastAction altText="Goto schedule to undo">Close</ToastAction>
        ),
      })
    }).catch((err) => {
      console.log(err)
      toast({
        variant: "destructive",
        title: "Failed to send message.",
        description: "",
        action: (
          <ToastAction altText="Goto schedule to undo">Close</ToastAction>
        ),
      })
    })
    
  }

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" method='post' onSubmit={handleSubmit}>
              <h3 className="text-2xl sm:text-4xl text-accent">{`Let's work together`}</h3>
              <p className="text-white/60">{`I'm excited to collaborate with you on creating robust and scalable software solutions. Let's bring your ideas to life & build something amazing together.`}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name='firstname' placeholder="First Name" value={formData.firstname} onChange={handleInputChange} required />
                <Input type="text" name='lastname' placeholder="Last Name" value={formData.lastname} onChange={handleInputChange} />
                <Input type="email" name='email' placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
                <Input type="tel" name='phone' placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} pattern="^[\+0-9\s\-]{3,20}$" required />
              </div>
              <Suspense>
                <SelectComponent name='service' value={formData.service} handleChange={handleSelectChange} />
              </Suspense>
              <Textarea name='message' className="h-[200px]" placeholder="Type your message here." value={formData.message} onChange={handleInputChange} />
              <Button type='submit' className="max-w-40">Send Message</Button>
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
                      <h3 className="text-lg xl:text-xl">{item.description}</h3>
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

export default ContactPage