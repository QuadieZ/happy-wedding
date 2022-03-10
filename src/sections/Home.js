import { Image } from "@chakra-ui/image"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/react"
import { PetalParticles } from "../components/PetalParticles"

export const Home = () => {
    return (
        <Flex w="100vw" h="100vh" direction={["row", "column"]} justify="center" align={["flex-start", "flex-end"]} >
            <Flex position="absolute" zIndex="10" w="100%" top="0" justify={["center", "flex-start  "]} p={5} pt={['6vh', 5]}>
                <Image src="icon.svg" boxSize="6vh" />
            </Flex>
            <Flex direction="column" justify="center" align={["center", "flex-end"]} color={["#9F8280", "white"]} pr={[0, 16]} pb={[0, 6]} pt={["15vh", 0]}>
                <Heading fontSize={["6vh", "7vw"]} fontWeight="light">Congratulations</Heading>
                <Text fontSize={["2vh", "2vw"]} mt={["0.8vh", "-2vh"]} >11.03.2565 | From 6/1 KMS 88 :)</Text>
            </Flex>
            <PetalParticles />
            <Box w="100vw" h="100vh" bgImage={["url('/phone_bg.png')", "url('/pc_bg.png')"]} bgSize="cover" zIndex="-200" position="absolute" />
        </Flex >
    )
}