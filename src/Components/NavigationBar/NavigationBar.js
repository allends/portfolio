import React from "react"
import { Flex, Button, Text, IconButton, HStack, Menu, MenuButton, MenuList, MenuItem, useBreakpointValue } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { ChevronDownIcon } from '@chakra-ui/icons'
import './NavigationBarStyles.css'

function NavigationBar() {
  const openGithub = () => {
    window.open("https://github.com/allends", "_blank")
  }
  const mobile = (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
      <MenuList>
        <a href="#introduction_panel">
          <MenuItem>
            Home
          </MenuItem>
        </a>
        <a href="#aboutme_panel">
          <MenuItem>
            About
          </MenuItem>
        </a>
      </MenuList>
    </Menu>
  )
  const desktop = (
    <HStack spacing="12px">
      <a href="#introduction_panel">
        <Text fontWeight="bold">Home</Text>
      </a>
      <a href="#aboutme_panel">
        <Text fontWeight="bold">About</Text>
      </a>
    </HStack>
  )
  const menu = useBreakpointValue({ base: mobile, sm: mobile, md: mobile, lg: desktop})


  return (
    <Flex direction="row" justify="space-between" align="center" className="navigation-bar" bgGradient='linear(to-l, #7928CA, #FF0080)'>
      {menu}
      <Flex direction="row" justify="flex-start" align="center">
        <IconButton variant="ghost" onClick={openGithub}>
          <FontAwesomeIcon size="2x" icon={faGithub} /> 
        </IconButton>
      </Flex>
    </Flex>
  )
}

export default NavigationBar