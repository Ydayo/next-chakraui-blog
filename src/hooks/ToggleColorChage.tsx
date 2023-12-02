"use client";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export const useColorChange = () => {
  const { toggleColorMode } = useColorMode();
  const fromBackground = useColorModeValue("gray.100", "gray.900");
  return {
    toggleColorMode,
    fromBackground,
  };
};
