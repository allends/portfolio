import React from "react"
import { Flex, Text, SimpleGrid } from '@chakra-ui/react'
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage'
import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import './ProjectsCollectionStyles.css'

function ProjectCollection() {

    const [image, setImage] = React.useState(null)

    const getImage = (imageUrl) => {
      getDownloadURL(imageUrl).then((url) => setImage(url)).catch(setImage(null))
    }

    React.useEffect(() => {
      const storage = getStorage()
      // Create a reference under which you want to list
      getImage(ref(storage, 'images/astarthumb.png'))
    }, [])

    return (
      <div>
        <Flex direction="column" align="center" justify="center" className="center">
          <Flex align="flex-start" justify="center" direction="column" className="breathe">
            <Text
              fontSize="6xl"
              fontWeight='bold'
            >
              Projects
            </Text>
            <SimpleGrid columns={3} spacing={5}>
              <img src={image} />
            </SimpleGrid>
          </Flex>
        </Flex>
      </div>
    )
}

export default ProjectCollection