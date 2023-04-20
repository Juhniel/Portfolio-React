import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Projects from "./components/Projects"
import ProjectData from "../src/data/ProjectData"
import SocialMedia from "./components/SocialMedia"
import Footer from "./components/Footer"

export default function App() {
  const projectArray = Object.values(ProjectData);

  return (
      <>
        <Navbar />
        <Header />
        {projectArray.map(project => <Projects key={project.id} name={project.name} img={project.img} 
        description={project.description}/>)}
        <SocialMedia/>
        <Footer/>
      </>
  )
}