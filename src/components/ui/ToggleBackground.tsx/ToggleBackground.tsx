"use client";
import { useColorChange } from "@/hooks/ToggleColorChage";
import { Box } from "@chakra-ui/react";
import { FC, LegacyRef, ReactNode } from "react";

const ToggleBackground: FC<{
  children: ReactNode;
  className?: string;
  myRef?: LegacyRef<HTMLDivElement> | undefined;
}> = ({ children, className, myRef }) => {
  const { fromBackground } = useColorChange();
  return (
    <Box background={fromBackground} className={className} ref={myRef}>
      {children}
    </Box>
  );
};

export default ToggleBackground;
