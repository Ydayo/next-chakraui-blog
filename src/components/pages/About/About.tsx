"use client";
import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";
import { Portfolio } from "@/components/ui/Portfolio/Portfolio";
import SeeMore from "@/components/ui/SeeMore/SeeMore";
import Skill from "@/components/ui/Skill/Skill";
import ToggleBackground from "@/components/ui/ToggleBackground.tsx/ToggleBackground";
import { useScroll } from "@/hooks/Scroll";
import { Button } from "@chakra-ui/react";

const About = () => {
  const { scrollRef, scrolled, handleScroll } = useScroll();

  return (
    <>
      <ToggleBackground myRef={scrollRef}>
        <Header />
        <div className="max-w-[1000px] mx-auto">
          <Skill />
          <Portfolio />
          <SeeMore />
          <Button
            onClick={handleScroll}
            className={`w-[50px] h-[50px] bg-green-100 rounded-full fixed bottom-10 right-10 first-letter:invisible opacity-0 transition-all text-black ${
              scrolled && "visible opacity-100"
            }`}
          >
            Top
          </Button>
        </div>
        <Footer />
      </ToggleBackground>
    </>
  );
};

export default About;
