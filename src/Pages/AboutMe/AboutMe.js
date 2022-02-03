import React from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'
import "./AboutMeStyles.css"

function AboutMe() {
  return (
    <Flex align="center" justify="center" className="center">
      <Flex align="left" justify="center" direction="column" className="textbox">
        <Text fontSize="6xl" fontWeight="bold">About me</Text>
        <Text fontSize="3xl">
          I am studying Computer Engineering at Rutgers. I am passionate about web and software development. Here are some <Link href="#projects_panel">projects</Link>.
        </Text>
      </Flex>
    </Flex>
  )
}

export default AboutMe