import "./App.css";
import Navbar from "./components/Navbar";
import HeroContainer from "./components/HeroContainer";
import About from "./components/About";
import ProjectsGallery from "./components/ProjectsGallery";
import ContactMe from "./components/ContactMe";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <HeroContainer />
      <About />
      <ProjectsGallery />
      <ContactMe />
    </Box>
  );
}

export default App;
