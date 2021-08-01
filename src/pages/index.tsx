import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { SwiperCarousel } from "../components/Swiper";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex 
      direction="column"
      align="center"
      maxWidth={1440}
      mt="0"
      mx="auto"
      bg="brand.white-text"
    >
      <Banner />
      <Box 
        maxWidth={1160} 
        width="100%" 
        mt={["9", "9", "28"]} 
        mx="auto" 
        mb={["9", "9", "20"]} 
        px={["12", "12", "3"]}
      >
        <TravelTypes />
      </Box>
      <Center 
        width={["60px", "90px", "120px"]}
        height="1px"
      >
        <Divider 
          width={["60px", "90px", "120px"]} 
          border="1px"
          borderColor="brand.black-text"
        />
      </Center>
      <Text 
        mt={["6", "8", "14"]} 
        mb={["1.25rem", "2rem", "3.25rem"]} 
        mx="auto"
        fontWeight="medium" 
        fontSize={["1.25rem", "1.25rem", "2rem"]} 
        textAlign="center"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
      <Box 
        maxWidth={1240} 
        height={["250px", "325px", "450px"]} 
        width="100%" 
        mx="auto" 
        mb={["1.5rem", "2.5rem"]}
      >
        <SwiperCarousel />
      </Box>
    </Flex>
  )
}
