import { Flex, Image, Text, VStack } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex justify="space-between" width="100%">
      <VStack spacing="6" align="center">
        <Image src="/images/cocktail.svg" height="85px" width="85px"/>
        <Text fontSize="2xl" fontWeight="semibold" mt="6">vida noturna</Text>
      </VStack>
      <VStack spacing="6" align="center">
        <Image src="/images/surf.svg" height="85px" width="85px"/>
        <Text fontSize="2xl" fontWeight="semibold" mt="6">praia</Text>
      </VStack>
      <VStack spacing="6" align="center">
        <Image src="/images/building.svg" height="85px" width="85px"/>
        <Text fontSize="2xl" fontWeight="semibold" mt="6">moderno</Text>
      </VStack>
      <VStack spacing="6" align="center">
        <Image src="/images/museum.svg" height="85px" width="85px"/>
        <Text fontSize="2xl" fontWeight="semibold" mt="6">clássico</Text>
      </VStack>
      <VStack spacing="6" align="center">
        <Image src="/images/earth.svg" height="85px" width="85px"/>
        <Text fontSize="2xl" fontWeight="semibold" mt="6">e mais...</Text>
      </VStack>
    </Flex>
  )
}