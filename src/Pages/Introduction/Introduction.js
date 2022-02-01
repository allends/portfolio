import React from "react"
import { Flex, Text, IconButton } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import './IntroductionStyles.css'

function Introduction() {
  const goDown = () => {
    console.log("pushed")
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': 40}))
  }
    return (
      <div>
        <Flex direction="column" align="center" justify="center" className="center">
          <Flex align="flex-start" justify="center" direction="column">
            <Text
              fontSize="6xl"
              fontWeight='bold'
            >
              Hi,
            </Text>
            <Text
              fontSize="6xl"
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text'
              fontWeight='bold'
            >
            my name is Allen.
            </Text>
          </Flex>
        </Flex>
        <IconButton 
          className="icon-position"
          variant="ghost"
          onClick={goDown}
          icon={<ChevronDownIcon w={8} h={8} />}
        />
      </div>
    )
}

export default Introduction