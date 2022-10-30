import {NewsCard} from "../news-card/NewsCard";
import {Box, Center, Flex, Square, Text, useColorModeValue} from "@chakra-ui/react";
import {news} from '../search/Search'

export function NewsList({news}) {
    // if(news.length === 0) {
    //     return (
    //         <Box>
    //             <Flex>
    //                 Sorry! There is no data for this topic!
    //             </Flex>
    //         </Box>
    //     )
    // }
    return (
        <Flex p='5' bgGradient={useColorModeValue(
            'radial(orange.600 1px, transparent 1px)',
            'radial(orange.300 1px, transparent 1px)'
        )} backgroundSize="20px 20px"
              opacity="0.4"
              height="570px">
            <Box w='10%'>
            </Box>
            <Box w='80%' p='5'>
                <NewsCard/>
            </Box>
            <Box w='10%'>
            </Box>
        </Flex>
    )
}