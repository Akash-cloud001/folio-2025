import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import YearCard from "../ui/YearCard";

const About = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create smooth transitions for different sections
  // First 25% (0-50vh): #0a0a0a
  // Middle 50% (50-150vh): #fbfaf3
  // Last 25% (150-200vh): #0a0a0a

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.75, 0.8],
    ["#0a0a0a", "#fbfaf3", "#fbfaf3", "#0a0a0a"]
  );

  return (
    <motion.section
      ref={containerRef}
      id="about"
      className="min-h-screen w-full padding-top-nav px-5 sm:px-8 relative max-w-container"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 w-3/5 h-96">

        <YearCard
          year={2025}
          content={[
            "Worked at Evomorf - March",
            "Started freelancing. Till now 3 😇 clients.",
            `'Became a partner in a startup'<a href="https://nestingo.com" target="_blank"> @nestingo</a>`,
            "Started Learning Japanese",
          ]}
          imgUrl="/images/firstCard.png"
          scale={1}
          className="absolute -top-32 -left-32"
        />
        <YearCard
          year={2024}
          content={[
            "Started Working in Evomorf. As ui designer & developer.",
            "Participated in Hacktoberfest 2024.",
            `Won First Prize in Desiging a web template using AI <a href="https://webcrumbs.org" target="_blank">   @webcrumbs.org</a>`,
          ]}
          imgUrl="/images/secondCard.png"
          scale={0.95}
          className="absolute -top-32 -right-32"
        />
        <YearCard
          year={2023}
          content={[
            "Internship at Accenture",
            `Graduated in B.Tech CSE with <span class="text-primary">8.34CGPA</span>.`,
            "Software Developer Trainee at HummingBird Web Solution.",
          ]}
          imgUrl="/images/thirdCard.png"
          scale={0.85}
          className="absolute -bottom-32 -left-32"
        />
        <YearCard
          year={"REST..."}
          content={[
            `Watching ANIME is the how I spend my free time. <a href='https://myanimelist.net/animelist/fatfck' target='_blank'>@my_fav_list</a>.`,
            "Taking Challenges on is what keeps me motivated.",
            "Spending good time with loved once is the best time for me.",
          ]}
          imgUrl="/images/fourthCard.png"
          scale={0.8}
          className="absolute -bottom-32 -right-32"
        />
      </div>
      <p className="ff-betatron text-[64px] w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className='uppercase ff-betatron  z-[1]'>ABOUT ME</p>
        <p className='uppercase ff-betatron text-nowrap text-stroke absolute z-0 left-1 top-1'>ABOUT ME</p>
      </p>
    </motion.section>
  );
};

export default About;
