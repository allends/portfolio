import React from "react"
import { Flex, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import './IntroductionStyles.css'

function Introduction() {
    return (
      <div>
        <Flex direction="column" align="center" justify="center" className="center">
          <Flex align="flex-start" justify="center" direction="column">
            <Text
              fontSize="6xl"
              fontWeight='bold'
            >
              Hello,
            </Text>
            <Text
              fontSize="6xl"
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text'
              fontWeight='bold'
            >
            I'm Allen.
            </Text>
          </Flex>
        </Flex>
        <a 
          className="icon-position opaque"
          href="#aboutme_panel"
        >
          <ChevronDownIcon w={8} h={8} />
        </a>
      </div>
    )
}

export default Introduction