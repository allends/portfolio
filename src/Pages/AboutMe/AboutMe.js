import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

function AboutMe() {
  return (
    <Flex align="center" justify="center" className="center">
      <Flex align="center" justify="center" direction="column">
        <Text fontSize="6xl" fontWeight="bold">About me</Text>
      </Flex>
    </Flex>
  )
}

export default AboutMe