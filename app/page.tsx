import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

const content = {
  title: "Software Developer",
  name: "Firmansyah Rozy",
  description: "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies"
}

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">{content.title}</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">{content.name}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {content.description}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant={"default"} 
                size="lg" 
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div>socials</div>
            </div>

          </div>
          
          <div className="hidden">photo</div>
        </div>
      </div>
    </section>
  );
}
