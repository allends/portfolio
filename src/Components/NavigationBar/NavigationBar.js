import React from "react"
import { Flex, Text, Icon, IconButton } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './NavigationBarStyles.css'

function NavigationBar() {
  const openGithub = () => {
    window.open("https://github.com/allends", "_blank")
  }
    return (
      <Flex direction="row" justify="space-between" align="center" className="navigation-bar" bgGradient='linear(to-l, #7928CA, #FF0080)'>
        <Flex direction="row" justify="flex-start" align="center">
          <IconButton variant="ghost" onClick={openGithub}>
            <FontAwesomeIcon size="2x" icon={faGithub} /> 
          </IconButton>
          <IconButton variant="ghost" onClick={openGithub}>
            <FontAwesomeIcon size="2x" icon={faGithub} /> 
          </IconButton>
        </Flex>
        <Flex direction="row" justify="flex-start" align="center">
          <IconButton variant="ghost" onClick={openGithub}>
            <FontAwesomeIcon size="2x" icon={faGithub} /> 
          </IconButton>
          <IconButton variant="ghost" onClick={openGithub}>
            <FontAwesomeIcon size="2x" icon={faGithub} /> 
          </IconButton>
        </Flex>
      </Flex>
    )
}

export default NavigationBar