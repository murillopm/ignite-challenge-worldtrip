import { Box, Flex, Heading, HStack, Icon, Image, SimpleGrid, Text, Tooltip, VStack } from "@chakra-ui/react";
import { GetStaticProps, GetStaticPaths } from "next";
import { GrCircleInformation } from "react-icons/gr"

import ReactCountryFlag from "react-country-flag"

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
        height={[150, 250, 350, 450, 500]}
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
        pb="2rem"
        bg="brand.white-text"
        px={["0.5rem", "2rem", "3rem", "8.75rem"]}
        direction="column"
      >
        <Flex 
          width="100%"
          mx="auto"
          mt={["1.5rem", "1.5rem", "2.5rem", "3.5rem", "5rem"]}
          justify="space-between"
          direction={["column", "column", "column", "row"]}
        >
          <Text 
            width={["100%", "100%", "100%", "500px", "600px"]} 
            textAlign="justify" 
            fontSize={["sm", "lg", "xl", "xl", "2xl"]}
          >
            {continent.description}
          </Text>
          <Flex
            as="span"
            align="center"
            justify="center"
            pl={["4", "10", "10", "10", "10", "20"]}
            mt={["6", "6", "6", "0"]}
          >
            <HStack spacing="42px" align="center" justify="center">
              <VStack>
                <Text 
                  fontSize={["2xl", "3xl", "4xl", "4xl", "5xl"]}
                  color="brand.yellow" 
                  fontWeight="semibold"
                  textAlign="center"
                  lineHeight={["2rem", "2.5rem"]}
                >
                  {continent.totalCountries} <br/>
                </Text>
                <Text 
                    fontSize={["lg", "lg", "2xl"]} 
                    color="brand.black-text" 
                    fontWeight="semibold"
                >
                  pa??ses
                </Text>
              </VStack>

              <VStack>
                <Text 
                  fontSize={["2xl", "3xl", "4xl", "4xl", "5xl"]}
                  color="brand.yellow" 
                  fontWeight="semibold"
                  textAlign="center"
                  lineHeight={["2rem", "2.5rem"]}
                >
                  {continent.totalLanguages} <br/>
                </Text>
                <Text 
                    fontSize={["lg", "lg", "2xl"]} 
                    color="brand.black-text" 
                    fontWeight="semibold"
                    textAlign="center"
                >
                  l??nguas
                </Text>
              </VStack>

              <VStack>
                <Text 
                  fontSize={["2xl", "3xl", "4xl", "4xl", "5xl"]}
                  color="brand.yellow" 
                  fontWeight="semibold"
                  textAlign="center"
                  lineHeight={["2rem", "2.5rem"]}
                >
                  {continent.popularcities} <br/>
                </Text>
                <Text 
                    fontSize={["lg", "lg", "2xl"]} 
                    color="brand.black-text" 
                    fontWeight="semibold"
                    textAlign="center"
                >
                  cidades +100 
                  <Tooltip 
                    label="As cidades +100 s??o as cidades que aquele continente possui que est??o entre as 100 cidades mais visitadas do mundo."
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
          fontSize={["1.5rem", "1.5rem", "2rem"]}
          fontWeight="medium"
          mt={["2rem", "2.5rem", "3rem", "4rem", "5rem"]}
        >
          Cidades +100
        </Heading> 

        <SimpleGrid
          width="100%"
          mt="2.5rem"
          minChildWidth="256px"
          columnGap="40px"
          rowGap="48px"
          columns={[1, 4]} 
        >
          {continent.mostpopularcities.map((city, index) => (
            <Box width="256px" key={index} justifySelf="center">
              <Image 
                src={city.cityImage}
                objectFit="cover"
                width="256px"
                height="173px"
                borderRadius="sm"
              />
              <Flex 
                width="100%"
                height="106px"
                borderX="2px solid"
                borderBottom="2px solid"
                borderColor="brand.yellow-op"
                borderBottomRadius="4"
              >
                <Flex 
                  px="1.5rem" 
                  justify="space-between" 
                  align="center"
                  height="100%"
                  width="100%"
                >
                  <Flex  
                    direction="column" 
                    height="100%"
                    justify="space-between"
                  >
                    <Heading 
                      pt="1.125rem"
                      fontSize="xl" 
                      fontWeight="semibold"
                    >
                      {city.city}
                    </Heading>
                    <Text 
                      fontSize="md" 
                      fontWeight="medium"
                      color="brand.black-info"
                      pb="25px"
                    >
                      {city.country}
                    </Text>
                  </Flex>
                  <ReactCountryFlag 
                    countryCode={city.countryCode}
                    style={{
                      fontSize: '2em',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                    svg
                  />
                </Flex>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
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