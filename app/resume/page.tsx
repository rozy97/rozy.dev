import { FaGolang, FaJs, FaAws, FaDocker } from "react-icons/fa6";
import { SiApachekafka } from "react-icons/si";
import { SiMysql, SiPostgresql, SiGooglecloud, SiRabbitmq, SiRubyonrails, SiMongodb, SiRedis } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const about = {
  title: "about me",
  description: `I'm a backend-focused software engineer with over five years of experience, specializing in microservices architecture with Golang. Since 2019, I’ve built scalable, high-performance systems, focusing on creating efficient APIs and secure, robust infrastructures. Passionate about quality and best practices, I aim to deliver reliable solutions that meet complex business needs.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Firmansyah Rozy"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 85765688100"
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years"
    },
    {
      fieldName: "Email",
      fieldValue: "rozy.firmansyah@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Indonesian"
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "List of My Professional Experience as a Software Engineer",
  items: [
    {
      company: "Rekeningku Dotcom Indonesia",
      product: "Reku",
      link: "https://reku.id",
      position: "Software Engineer (Backend)",
      duration: "2022 - present"
    },
    {
      company: "Lunaria Annua Teknologi",
      product: "KoinWorks",
      link: "https://koinworks.com",
      position: "Software Engineer (Backend)",
      duration: "2021 - 2022"
    },
    {
      company: "Forstok Teknologi Indonesia",
      product: "Forstok",
      link: "https://forstok.com",
      position: "Software Engineer (Backend)",
      duration: "2019 - 2021"
    },
  ]
}

const skills = {
  title: "My Skills",
  description: "Here are some of the skills I excel at",
  skillList: [
    {
      icon: <FaGolang />,
      name: "Go"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <SiRubyonrails />,
      name: "Ruby on Rails"
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL"
    },
    {
      icon: <SiMysql />,
      name: "MySQL"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB"
    },
    {
      icon: <SiRedis />,
      name: "Redis"
    },
    {
      icon: <SiRabbitmq />,
      name: "RabbitMQ"
    },
    {
      icon: <SiApachekafka />,
      name: "Apache Kafka"
    },
    {
      icon: <FaDocker />,
      name: "Docker"
    },
    {
      icon: <SiGooglecloud />,
      name: "Google Cloud Platform"
    },
    {
      icon: <FaAws />,
      name: "Amazon Web Services"
    },
  ]
}

const Resume = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <Link href={item.link} target="_blank">
                              <p className="text-white/60">{item.product}</p>
                            </Link>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={5}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div> 
            </TabsContent>  
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default Resume