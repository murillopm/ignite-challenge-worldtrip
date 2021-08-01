import { Flex, HStack, Icon, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa'

export function TravelTypes() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  if(isMobile) {
    return (
      <Flex 
        justify="space-between" 
        width="100%" 
        flexWrap="wrap"
      >
        <HStack spacing="2" align="center" mr="2" mb="4">
          <Icon as={FaCircle} color="brand.yellow" height="8px" width="8px"/>
          <Text fontSize={["lg", "xl"]} fontWeight="medium" mt="6">vida noturna</Text>
        </HStack>

        <HStack spacing="2" align="center" mr="2" mb="4">
          <Icon as={FaCircle} color="brand.yellow" height="8px" width="8px"/>
          <Text fontSize={["lg", "xl"]} fontWeight="medium" mt="6">praia</Text>
        </HStack>

        <HStack spacing="2" align="center" mr="2" mb="4">
          <Icon as={FaCircle} color="brand.yellow" height="8px" width="8px"/>
          <Text fontSize={["lg", "xl"]} fontWeight="medium" mt="6">moderno</Text>
        </HStack>

        <HStack spacing="2" align="center" mr="2" mb="4">
          <Icon as={FaCircle} color="brand.yellow" height="8px" width="8px"/>
          <Text fontSize={["lg", "xl"]} fontWeight="medium" mt="6">clássico</Text>
        </HStack>
        <HStack spacing="2" align="center" mr="2" mb="4">
          <Icon as={FaCircle} color="brand.yellow" height="8px" width="8px"/>
          <Text fontSize={["lg", "xl"]} fontWeight="medium" mt="6">e mais...</Text>
        </HStack>
      </Flex>
    )
  }
  
  return (
    <Flex 
      justify="space-between" 
      width="100%" 
      flexWrap="nowrap"
    >
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