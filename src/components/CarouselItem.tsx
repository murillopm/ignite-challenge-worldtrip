import { Flex, Text } from "@chakra-ui/react";

interface CarouselItemProps {
  continent: string;
  description: string;
  url: string;
}

export function CarouselItem({ continent, description, url }: CarouselItemProps) {
  return (
    <Flex
      height="100%"
      width="100%"
      direction="column"  
      justify="center"
      align="center"
      bgImage={`url(${url})`}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Text mb="4" fontWeight="bold" fontSize="5xl" color="brand.white-text">{continent}</Text>
      <Text fontWeight="bold" fontSize="2xl" color="brand.white-text">{description}</Text>
    </Flex>
  )
}