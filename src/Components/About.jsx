import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import YearCard from "./ui/YearCard";
import InViewAnimation from "./ui/InViewAnimation";

const About = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.section
      ref={containerRef}
      id="about"
      className="min-h-screen pt-24 md:pt-20  w-full px-5 sm:px-8 relative max-w-container"
    >
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  w-3/5 h-96">
        
        {/* <img src="/images/my_img.png" alt="my img" className="absolute -top-[280px] -2xl:top-[300px] left-1/2 -translate-x-1/2 w-36 h-auto aspect-square rounded-full object-cover custom-drop-shadow hover:scale-105 transition-all duration-300" /> */}
        <InViewAnimation delay={0.3} yOffset={30} duration={1} className="absolute -top-32 -left-32">
          <YearCard
            year={2025}
            content={[
              "Worked at Evomorf - March",
              "Started freelancing. Till now 3 😇 clients.",
              `Became a partner <a className="font-semibold" href="https://nestingo.com" target="_blank"> @nestingo</a>.`,
              "Started Learning 🇯🇵 Japanese.",
            ]}
            imgUrl="/images/firstCard.png"
            scale={1}
            
          />
        </InViewAnimation>
        
        <InViewAnimation delay={0.3} yOffset={30} duration={1} className="absolute -top-32 -right-32">
          <YearCard
            year={2024}
            content={[
              "Started Working in Evomorf. As ui designer & developer.",
              "Participated in Hacktoberfest 2024.",
              `Won First Prize in Desiging a web template using AI <a href="https://webcrumbs.org" target="_blank">   @webcrumbs.org</a>`,
            ]}
            imgUrl="/images/secondCard.png"
            scale={0.95}
            
          />
        </InViewAnimation>
      
        <InViewAnimation delay={0.3} yOffset={30} duration={1} className="absolute -bottom-32 -left-32">
          <YearCard
            year={2023}
            content={[
              "Internship at Accenture",
              `Graduated in B.Tech CSE with <span class="text-primary">8.34CGPA</span>.`,
              "Software Developer Trainee at HummingBird Web Solution.",
            ]}
            imgUrl="/images/thirdCard.png"
            scale={0.85}
          />
        </InViewAnimation>

        <InViewAnimation delay={0.3} yOffset={30} duration={1} className="absolute -bottom-32 -right-32 w-max h-max">
          <YearCard
            year={"REST..."}
            content={[
              `Watching anime is the how I spend my free time. So I build a Wikipedia of anime called as <a href='https://ani-pedia.web.app/' target='_blank'>@ani-pedia</a>.`,
              "Taking Challenges on is what keeps me motivated.",
              "Spending good time with loved once is the best time for me.",
            ]}
            imgUrl="/images/fourthCard.png"
            scale={0.8}
            
          />

        </InViewAnimation>
      </div>
      <InViewAnimation delay={0.3} yOffset={30} duration={1} className="absolute left-[40%] top-[40%] flex flex-col items-center justify-center">
          <img src="/images/my_img.png" alt="my img" className=" w-36 h-auto aspect-square rounded-full object-cover custom-drop-shadow hover:scale-105 transition-all duration-300" />
          <div className="hidden lg:block ff-betatron text-[64px] w-max relative">
            <p className='uppercase ff-betatron  z-[1]'>ABOUT ME</p>
            <p className='uppercase ff-betatron text-nowrap text-stroke absolute z-0 left-1 top-1'>ABOUT ME</p>
          </div>
      </InViewAnimation>



      {/* mobile view */}
      <div className="flex flex-col gap-8 items-center justify-center lg:hidden">
        <header className="flex flex-col gap-4 items-center justify-center">
            <img src="/images/my_img.png" alt="my img" className="w-36 h-auto aspect-square rounded-full object-cover custom-drop-shadow hover:scale-105 transition-all duration-300" />
            <div className="ff-betatron text-[44px] w-max relative">
              <p className='uppercase ff-betatron  z-[1]'>ABOUT ME</p>
              <p className='uppercase ff-betatron text-nowrap text-stroke absolute z-0 left-1 top-1'>ABOUT ME</p>
            </div>            
        </header>

        <div className="flex flex-col gap-10 items-center justify-center ">
          <YearCard
            year={2025}
            content={[
              "Worked at Evomorf - March",
              "Started freelancing. Till now 3 😇 clients.",
              `Became a partner <a href="https://nestingo.com" target="_blank"> @nestingo</a>.`,
              "Started Learning 🇯🇵 Japanese.",
            ]}
            imgUrl="/images/firstCard.png"
            className="px-4"
          />
          <YearCard
            year={2024}
            content={[
              "Started Working in Evomorf. As ui designer & developer.",
              "Participated in Hacktoberfest 2024.",
              `Won First Prize in Desiging a web template using AI <a href="https://webcrumbs.org" target="_blank">   @webcrumbs.org</a>`,
            ]}
            imgUrl="/images/secondCard.png"
            className="px-4"
          />
          <YearCard
            year={2023}
            content={[
              "Internship at Accenture",
              `Graduated in B.Tech CSE with <span class="text-primary">8.34CGPA</span>.`,
              "Software Developer Trainee at HummingBird Web Solution.",
            ]}
            imgUrl="/images/thirdCard.png"
            className="px-4"
          />
          <YearCard
            year={"REST..."}
            content={[
              `Watching anime is the how I spend my free time. <a href='https://myanimelist.net/animelist/fatfck' target='_blank'>@my_fav_list</a>.`,
              "Taking Challenges on is what keeps me motivated.",
              "Spending good time with loved once is the best time for me.",
            ]}
            imgUrl="/images/fourthCard.png"
            className="px-4"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
