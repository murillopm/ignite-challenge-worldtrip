import { Box, Divider, Flex, Text } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { SwiperCarousel } from "../components/Swiper";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex 
      direction="column"
      align="center"
      maxWidth={1440}
      mt="0"
      mb="2.5rem"
      mx="auto"
    >
      <Banner />
      <Box mt="28" maxWidth={1160} width="100%" mx="auto" mb="20" px="3">
        <TravelTypes />
      </Box>
      <Box width="90px">
        <Divider width="90px" border="2px" borderColor="brand.black-text"/>
      </Box>
      <Text mt="14" mb="3.25rem" fontWeight="medium" fontSize="2rem" textAlign="center">
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
      <Box maxWidth={1240} width="100%" mx="auto">
        <SwiperCarousel />
      </Box>
    </Flex>
  )
}
