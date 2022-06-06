import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HeroContainer = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        sx={{ border: "red 1px solid", color: "red", marginTop: "4rem" }}
      >
        {" "}
        This is the Hero Container
      </Typography>
    </Box>
  );
};

export default HeroContainer;
