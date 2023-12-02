"use client";
import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";
import { Portfolio } from "@/components/ui/Portfolio/Portfolio";
import SeeMore from "@/components/ui/SeeMore/SeeMore";
import Skill from "@/components/ui/Skill/Skill";
import { useColorChange } from "@/hooks/ToggleColorChage";
import { Box } from "@chakra-ui/react";

const About = () => {
  const { fromBackground } = useColorChange();

  return (
    <>
      <Box background={fromBackground}>
        <Header />
        <div className="max-w-[1000px] mx-auto">
          <Skill />
          <Portfolio />
          <SeeMore />
        </div>
        <Footer />
      </Box>
    </>
  );
};

export default About;
