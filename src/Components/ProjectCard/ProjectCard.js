import React from 'react'
import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { getImage } from '../../utils'
import ProjectModal from '../ProjectModal/ProjectModal'
import './ProjectCardStyles.css'

function ProjectCard({ project }) {
  const { title, imageLocation } = project
  const size = useBreakpointValue({default: '1xl', sm: 'sm', md: 'md', lg: '1xl'})

  const [image, setImage] = React.useState(null)

  React.useEffect(() => {
    getImage(imageLocation).then((response) => setImage(response))
  }, [imageLocation])

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Box className="projectcard" onClick={onOpen} bgGradient='linear(to-t, #7928CA, #FF0080)'> 
      <Image src={image} className="thumbnail" />
      <Text fontSize={size} fontWeight="bold" align="center" className="cardtext">
        {title}
      </Text>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
    </Box>
  )
}

export default ProjectCard