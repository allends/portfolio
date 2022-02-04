import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import theme from './theme'
import ScrollPanel from './Components/ScrollPanel/ScrollPanel'
import NavigationBar from './Components/NavigationBar/NavigationBar'

import { pages } from './index'
import { initialize } from './firebase'

function App() {
  initialize()
  return (
    <ChakraProvider theme={theme}>
      <div className="container">
        <NavigationBar />
        {pages.map((page, index) => (
          <ScrollPanel key={index}>
            {page}
          </ScrollPanel>
        ))}
      </div>
    </ChakraProvider>
  );
}

export default App;
