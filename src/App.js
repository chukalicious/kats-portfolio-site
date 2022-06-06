import "./App.css";
import Navbar from "./components/Navbar";
import HeroContainer from "./components/HeroContainer";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <HeroContainer />
    </Box>
  );
}

export default App;
