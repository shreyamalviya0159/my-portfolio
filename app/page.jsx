import { Button } from "@/components/ui/button"
import Photo from "@/components/ui/photo";
import Social from "@/components/ui/social";
import Stats from "@/components/ui/stats";
import Link from "next/link";
import {FiDownload} from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Senior Software Developer</span>
            <h2 className="h2 mb-6">Hello I'm <br /> <span className="text-accent">Shreya Malviya</span></h2>
            <p className="max-w-[500px] mb-9 text-white/80">Passionate Java Developer with over 4 years of hands-on experience in building robust and scalable fintech solutions using Spring Boot. Committed to delivering high-quality code and innovative solutions to financial challenges.
 full-stack application development</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/assets/resume.pdf" download target="_blank">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              </Link>
              <div className="mb-8 xl:mb-0"><Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" /></div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo/></div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home
