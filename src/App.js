import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import theme from './theme'
import ScrollPanel from './Components/ScrollPanel/ScrollPanel'
import Introduction from './Pages/Introduction/Introduction'
import AboutMe from './Pages/AboutMe/AboutMe'
import NavigationBar from './Components/NavigationBar/NavigationBar'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="container">
        <NavigationBar />
        <ScrollPanel>
          <div id="introduction_panel">
            <Introduction />
          </div>
        </ScrollPanel>
        <ScrollPanel>
          <div id="aboutme_panel">
            <AboutMe />
          </div>
        </ScrollPanel>
      </div>
    </ChakraProvider>
  );
}

export default App;
