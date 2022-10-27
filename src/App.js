import './App.css';
import {extendTheme, ChakraProvider} from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import {NewsList} from "./components/news-list/NewsList";

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    }
}
const theme = extendTheme({
    colors
})
function App() {
    return (
        <ChakraProvider>
            <Navbar/>
            <NewsList/>
        </ChakraProvider>
    );
}

export default App;
