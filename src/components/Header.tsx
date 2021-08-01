import { Flex, Icon, Image, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io"

export function Header() {
  const path = useRouter()

  if (path.asPath === '/') {
    return (
      <Flex 
        as="header"   
        justify="center" 
        align="center" 
        w="100%" 
        py={["4", "7"]} 
        bg="brand.white-text" 
        maxWidth={1440}
        mx="auto"
      >
        <Image src="/images/logo.svg" height={["5", "12"]} width={["20", "44"]}/>
      </Flex>
    )
  } else {
    return (
      <Flex 
        as="header" 
        justify="center" 
        align="center" 
        maxWidth={1440}
        w="100%" 
        mx="auto"
        py={["4", "7"]} 
        bg="brand.white-text" 
        position="relative"
      >
        <Link href="/">
          <ChakraLink left={["16px", "48px", "72px", "140px"]} position="absolute">
            <Icon as={IoIosArrowBack} height="28px" width="28px"/>
          </ChakraLink>
        </Link>
        <Image src="/images/logo.svg" height={["5", "10", "12"]} width={["20", "32", "44"]}/>
      </Flex>
    )
  }
  
}