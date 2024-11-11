"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as swiperObj } from "swiper/types"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "backend",
    title: "Reku",
    description: "Trading Platform focusing on Crypto & US Stock Assets. Buy & Sell Assets, Manage bundle Assets Using Pocket, Transfer Assets, Daily Reward Quiz Guessing Assets price. Using Microservices Architecture on the Server Side.",
    stack: [{ name: "PHP" }, { name: "Go" }, { name: "MySQL" }, { name: "TimescaleDB" }, { name: "Redis" }, { name: "Kafka" }, { name: "NextJS" }, { name: "Flutter" }],
    image: "/assets/work/reku-2.jpg",
    live: "https://reku.id",
    github: "https://github.com/rozy97"
  },
  {
    num: "02",
    category: "backend",
    title: "KoinWorks",
    description: "Financial Super App with 8+ products. Invest or borrow P2P lending, Buy & Sell Gold, Manage Company invoice, Manage Employee Salary, etc. Build with Microservices Architecture on the Backend Side",
    stack: [{ name: "PHP" }, { name: "Go" }, { name: "PostgreSQL" }, { name: "Redis" }, { name: "Kafka" }, { name: "React" }, { name: "Kotlin" }, { name: "Swift" }],
    image: "/assets/work/koinworks-2.jpg",
    live: "https://reku.id",
    github: "https://github.com/rozy97"
  },
  {
    num: "03",
    category: "backend",
    title: "Forstok",
    description: "One dashboard solution for online seller manage their product, inventory, sale, invoice, & accounting. Integrate API to multiple marketplace such as Tokopedia, Shopee, Shopify, etc",
    stack: [{ name: "Ruby on Rails" }, { name: "Go" }, { name: "MySQL" }, { name: "MongoDB" }, { name: "Redis" }, { name: "RabbitMQ" }, { name: "React" }],
    image: "/assets/work/forstok-2.jpg",
    live: "https://forstok.com",
    github: "https://github.com/rozy97"
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper: swiperObj) => {
    setProject(projects[swiper.activeIndex])
  }

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={5}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover object-top" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work