import React from 'react'
import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { getImage } from '../../utils'
import ProjectModal from '../ProjectModal/ProjectModal'
import './ProjectCardStyles.css'

function ProjectCard({ project }) {
  const { title, imageLocation } = project
  const size = useBreakpointValue({default: '3xl', sm: 'lg', md: 'md', lg: '3xl'})

  const [image, setImage] = React.useState(null)

  React.useEffect(() => {
    getImage(imageLocation).then((response) => setImage(response))
  }, [imageLocation])

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Box borderWidth="3px" borderRadius="md" overflow="hidden" onClick={onOpen}>
      <Image src={image} className="thumbnail" />
      <Text fontSize={size}>
        {title}
      </Text>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
    </Box>
  )
}

export default ProjectCard