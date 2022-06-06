import "./App.css";
import Navbar from "./components/Navbar";
import HeroContainer from "./components/HeroContainer";
import About from "./components/About";
import ProjectsGallery from "./components/ProjectsGallery";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <HeroContainer />
      <About />
      <ProjectsGallery />
    </Box>
  );
}

export default App;
