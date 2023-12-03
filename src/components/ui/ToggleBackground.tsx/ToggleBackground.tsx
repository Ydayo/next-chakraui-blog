"use client";
import { useColorChange } from "@/hooks/ToggleColorChage";
import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const ToggleBackground: FC<{
  children: ReactNode;
  className?: string;
  myRef?: any;
}> = ({ children, className, myRef }) => {
  const { fromBackground } = useColorChange();
  return (
    <Box background={fromBackground} className={className} ref={myRef}>
      {children}
    </Box>
  );
};

export default ToggleBackground;
