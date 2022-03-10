import { Image } from "@chakra-ui/image"
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/layout"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useEffect, useMemo } from "react"
import useData from "../hooks/useData"
import { useSpringCarousel} from 'react-spring-carousel'
import { useWindownDimension } from "../hooks/useWindowDimension"

const CarouselItem = ({ wish, name, bg }) => {
    return (<Stack justify={bg ? "end":"center" } h="100%" bg={bg ? `url(${bg}) #FAEAE9` : "#FAEAE9"} p={5} w="100%" m={5} borderRadius={10} bgSize="contain" spacing={0} bgRepeat="no-repeat" bgPosition="center">
        <Text bgColor={bg ? "white" : "transparent"} p={bg ? 2 : 0} fontSize={["3xl","lg"]}>{wish}</Text>
        <Text bgColor={bg ? "white" : "transparent"} p={bg ? 2 : 0} mt={bg ? "-1vh" : 0} fontWeight="light" fontSize={["3xl","lg"]}>{name ? `- ${name}` : ''}</Text>
    </Stack>)
}

const CardCarousel = ({items}) => {
    const { width } = useWindownDimension()
    console.log(items)
    const carouselData = useMemo(() => {
        if (items) return (
            items?.map(item => ({
                id: item.id,
                renderItem: (<CarouselItem wish={item.fields.Notes} name={item.fields.Name} bg={item.fields.Attachments ? item.fields.Attachments[0].url : undefined}/>)
            }))
        )
        return [{}]
    },[items])
    const { carouselFragment } = useSpringCarousel({
        itemsPerSlide: items && width >= 750 ? 3 :1,
      items: carouselData
    })

    return (
      <Box h="50%" m={5} w="100%" fontFamily='Athiti'>
        {carouselFragment}
      </Box>
    );
  }

export const Cards = () => {
    const { getData, data } = useData()

    useEffect(() => {
        async function onPageLoad() {
            await getData();
        }
        onPageLoad();
    }, []);

    return (
        <Parallax pages={2} style={{ top: '0', left: '0', width: '100%', height: '100vh', zIndex: 11 }}>
            <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#9F8280' }}>
                <Flex position="absolute" zIndex="10" w="100%" top="0" justify={["center", "flex-start"]} p={5} pt={['6vh', 5]}>
                    <Image src="icon_white.svg" boxSize="6vh" />
                </Flex>
                <Flex position="absolute" zIndex="10" w="100%" bottom="0" justify={["center", "space-between"]} h={["15vh", "17vh"]} px="2vw">
                    <Image src="/flowers/flower_group.svg" />
                    <HStack spacing="-2vw" ml={["-5vw", "0"]}>
                        <Image src="/flowers/grass.svg" mb="-3rem" display={['none', 'block']} boxSize="80%" />
                        <Image src="/flowers/rose.svg" boxSize="120%" />
                    </HStack>
                </Flex>

                <Flex w="100%" h="100vh" align="center" justify="center" pos="relative" pb={10} mt="-3vh">
                   <CardCarousel items={data}/>
                </Flex>
                <Flex  w="100%" h="25vh" position="absolute" bottom="0" justify="center"><Text color="white" fontSize="xl" fontFamily='Athiti'>เลื่อนเลย --></Text></Flex>
            </ParallaxLayer>
        </Parallax>
    )
}