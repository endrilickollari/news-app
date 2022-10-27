import {Button, Input, InputGroup, InputLeftAddon, InputRightAddon, Spinner, Stack} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {useSearchParams} from 'react-router-dom';
import {useRef, useState} from "react";
import {NEWS_API_KEY, NEWS_API_URL} from "../../api/Api";
import {useToast} from "@chakra-ui/react";

export function Search() {
    const [searchParams, setSearchParams] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);
    let [newsData, setNewsData] = useState([]);
    const handleChange = (event) => setSearchParams(event.target.value);
    const toast = useToast();

    function searchNews() {
        setShowSpinner(true);
        return fetch(`${NEWS_API_URL}?q=${searchParams}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                newsData = data.articles;
                setNewsData(newsData);
                console.log(newsData);
                if (newsData.length === 0) {
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
                    toast({
                        title: 'News successfully load!',
                        description: '',
                        status: 'info',
                        duration: 5000,
                        isClosable: true
                    });
                }
            });
        // alert(searchParams);
        // setSearchParams('');
        // setShowSpinner(true);
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