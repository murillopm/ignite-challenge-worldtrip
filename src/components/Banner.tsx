import { Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
    
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })
  
  return (
    <Box
      width="100%"
      height={[163, 250, 335]}
      bgImage="/images/background.png"
    >
      <Flex 
        justify="space-between"
        px={["4", "18", "36"]}
        pt={["7", "9", "20"]}
      > 
        <Box width="32.75rem">
          <Heading 
            fontSize={["xl", "3xl", "4xl"]} 
            color="brand.white-text" 
            lineHeight={["2rem", "3rem", "3.5rem"]}
          >
            5 Continentes, <br/>infinitas possibilidades.
          </Heading>
          <Text fontSize={["sm", "lg", "lg"]} pt={["2", "5", "5"]} color="brand.white-info">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Box>

        {!isMobile && (
          <Image 
            src="/images/airplane.svg" 
            height="270.74px" 
            width="417.15px"
            rotate="3deg"
            mt="1.5"
          />
        )}
      </Flex>
    </Box>
  )
}