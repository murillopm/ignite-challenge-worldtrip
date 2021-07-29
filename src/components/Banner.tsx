import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      width="100%"
      height={335}
      bgImage="/images/background.png"
    >
      <Flex 
        justify="space-between"
        px="36"
        pt="20"
      > 
        <Box width="32.75rem">
          <Heading fontSize="4xl" color="brand.white-text" lineHeight="3.5rem">
            5 Continentes, <br/>infinitas possibilidades.
          </Heading>
          <Text fontSize="lg" pt="5" color="brand.white-info">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Box>

        <Image 
          src="/images/airplane.svg" 
          height="270.74px" 
          width="417.15px"
          rotate="3deg"
          mt="1.5"
        />
      </Flex>
    </Box>
  )
}