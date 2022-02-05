import React from "react"
import { Flex, Text, SimpleGrid, Spinner } from '@chakra-ui/react'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import './ProjectsCollectionStyles.css'

function ProjectCollection() {

  const [projects, setProjects] = React.useState(null)

  const firestore = getFirestore()
  const getProjects = async () => {
    const projectsSnap = collection(firestore, 'projects')
    const projectsList = await getDocs(projectsSnap)
    const result = projectsList.docs.map((project) => project.data())
    setProjects(result)
  }

  React.useEffect(() => {
    getProjects()
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
            { projects ? (projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))) : <Spinner />}
          </SimpleGrid>
        </Flex>
      </Flex>
    </div>
  )
}

export default ProjectCollection