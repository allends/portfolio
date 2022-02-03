import React from 'react'
import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react'

function ProjectCard({ image, description }) {
  const size = useBreakpointValue({default: '3xl', sm: 'lg', md: 'md', lg: '3xl'})
  return (
    <Box borderWidth="3px" borderRadius="md" overflow="hidden">
      <Image src={image} />
      <Text fontSize={size}>
        {description}
      </Text>
    </Box>
  )
}

export default ProjectCard