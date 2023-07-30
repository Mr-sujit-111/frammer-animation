import { GithubIcon } from "@/icons/github";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["end end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);



  return (
    <motion.section
      style={{ opacity }}
      ref={heroRef}
      className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40 flex justify-center"
    >
      <motion.div
        style={{ scale, opacity }}
        className="fixed z-10 flex flex-col items-center"
      >
        <p className="mb-2 text-xl font-light">
          <span className="font-medium">NextJS</span> Project
        </p>
        <p className="mb-8 text-center text-xs font-light text-text">
          using{" "}
          NextJS, TailwindCss & Frammermotion
          ,
          <br />
          built by{" "}
          <a
            href="https://www.frontend.fyi"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            SUJIT BHANDERI
          </a>
        </p>

        <h1 className="mb-12 text-center font-heading text-3xl leading-[1]">
          FRONTEND
          <br />
          DEVELOPER
        </h1>

        <a href="https://github.com/Mr-sujit-111/frammer-animation.git" className="flex items-center text-lg text-primary">
          <GithubIcon className="mr-2 inline h-5 w-5" />
          Import project
        </a>
      </motion.div>
    </motion.section>
  );
};
