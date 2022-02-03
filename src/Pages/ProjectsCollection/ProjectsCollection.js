import React from "react"
import { Flex, Text, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import testimage from '../../res/thumbnails/thumbnail.png'
import './ProjectsCollectionStyles.css'

function ProjectCollection() {
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
              <ProjectCard image={testimage} description="A-Star Pathfinding" />
            </SimpleGrid>
          </Flex>
        </Flex>
      </div>
    )
}

export default ProjectCollection