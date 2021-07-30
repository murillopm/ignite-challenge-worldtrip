import { Box, Flex, Heading, HStack, Icon, Text, Tooltip, VStack } from "@chakra-ui/react";
import { GetStaticProps, GetStaticPaths } from "next";
import { GrCircleInformation } from "react-icons/gr"

import { api } from "../../services/api";

type City = {
  city: string;
  cityImage: string;
  country: string;
  countryCode: string;
}

type Continent = {
  id: string;
  name: string;
  description: string;
  bannerImgUrl: string;
  totalCountries: number;
  totalLanguages: number,
  popularcities: number,
  mostpopularcities: City[];
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Flex 
        bgImg={continent.bannerImgUrl} 
        w="100%" 
        maxWidth={1440}
        height={500}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        mx="auto"
        pl={["0", "0", "140px"]}
        pb={["0", "0", "59px"]}
        direction="column"
        justify={["center", "center", "flex-end"]}
        align={["center", "center", "flex-start"]}
      >
        <Heading 
          fontSize={["3xl", "5xl"]} 
          color="brand.white-text" 
          fontWeight="semibold"
        >
          {continent.name}
        </Heading>
      </Flex>

      <Flex
        maxWidth={1440}
        width="100%"
        mx="auto"
        bg="brand.white-text"
        px="8.75rem"
        direction="column"
      >
        <Flex 
          
          width="100%"
          mx="auto"
          mt="5rem"
          justify="space-between"
        >
          <Text 
            width="600px" 
            textAlign="justify" 
            fontSize="2xl"
          >
            {continent.description}
          </Text>
          <Flex
            as="span"
            align="center"
          >
            <HStack spacing="42px" align="center" justify="center">

              <VStack>
                <Text 
                  fontSize="5xl" 
                  color="brand.yellow" 
                  fontWeight="semibold"
                  textAlign="center"
                  lineHeight="2.5rem"
                >
                  {continent.totalCountries} <br/>
                </Text>
                <Text 
                    fontSize="2xl" 
                    color="brand.black-text" 
                    fontWeight="semibold"
                >
                  países
                </Text>
              </VStack>

              <VStack>
                <Text 
                  fontSize="5xl" 
                  color="brand.yellow" 
                  fontWeight="semibold"
                  textAlign="center"
                  lineHeight="2.5rem"
                >
                  {continent.totalLanguages} <br/>
                </Text>
                <Text 
                    fontSize="2xl" 
                    color="brand.black-text" 
                    fontWeight="semibold"
                >
                  línguas
                </Text>
              </VStack>

              <VStack>
                <Text 
                  fontSize="5xl" 
                  color="brand.yellow" 
                  fontWeight="semibold"
                  textAlign="center"
                  lineHeight="2.5rem"
                >
                  {continent.popularcities} <br/>
                </Text>
                <Text 
                    fontSize="2xl" 
                    color="brand.black-text" 
                    fontWeight="semibold"
                >
                  cidades +100 
                  <Tooltip 
                    label="As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo."
                  >
                    <Box as="span">
                      <Icon 
                        as={GrCircleInformation} 
                        color="yellow.500"
                        opacity="0.2" 
                        size="20px" 
                        mb="1" 
                        ml="1"
                      />
                    </Box>
                  </Tooltip>
                </Text>
              </VStack>
            </HStack>


          </Flex>
        
        </Flex>
        <Heading
          fontSize="2rem"
          fontWeight="medium"
        >
          Cidades +100
        </Heading> 
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug
  
  const continent = (await api.get<Continent>(`/continents/${slug}`)).data

  return {
    props: { continent }
  }
}