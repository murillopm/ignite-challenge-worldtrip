import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justify="center" align="center" w="100%" py="7" as="header">
        <Image src="/images/logo.svg" height="12" width="44"/>
    </Flex>
  )
}