import {Button, Input, InputGroup, InputLeftAddon, InputRightAddon, Spinner, Stack} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {useSearchParams} from 'react-router-dom';
import {useRef, useState} from "react";
import {NEWS_API_KEY_URL, NEWS_API_URL} from "../../api/Api";
import {useToast} from "@chakra-ui/react";
export let news;

export function Search() {
    const [searchParams, setSearchParams] = useState('');
    // const [apiKey, setApiKey] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);
    const [newsData, setNewsData] = useState([]);
    news = newsData;
    const handleChange = (event) => {
        setSearchParams(event.target.value);
    };
    const toast = useToast();

    function searchNews() {
        setShowSpinner(true);
        return fetch(`${NEWS_API_KEY_URL}`)
            .then(res => res.json())
            .then(data => {
                //setApiKey(data.ApiKey);
                fetch(`${NEWS_API_URL}?q=${searchParams}&sortBy=publishedAt&apiKey=${data.ApiKey}`)
                    .then(resNews => resNews.json())
                    .then(dataNews => {
                        setNewsData(dataNews.articles);
                        if (dataNews.articles.length === 0) {
                            setShowSpinner(false);
                            toast({
                                title: 'No data found!',
                                description: '',
                                status: 'info',
                                duration: 5000,
                                isClosable: true
                            });
                        } else {
                            setShowSpinner(false);
                            setSearchParams('');
                            toast({
                                title: 'News successfully load!',
                                description: '',
                                status: 'info',
                                duration: 5000,
                                isClosable: true
                            });
                        }
                    })
            });
    }

    return (
        <>
            <Stack>
                <InputGroup>
                    <Input type='text' varinat='outline'
                           value={searchParams}
                           onChange={handleChange}
                           placeholder='Search news...' htmlSize={70} width='auto'/>
                    <InputRightAddon
                        children={
                            !showSpinner ? (
                                <SearchIcon colorScheme='messenger'
                                            cursor='pointer'
                                            onClick={searchNews}>Search</SearchIcon>) : (<Spinner color='green.400'/>)

                        }/>
                </InputGroup>
            </Stack>
        </>
    )
}