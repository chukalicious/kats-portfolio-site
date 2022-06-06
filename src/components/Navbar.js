import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ justifyContent: "center" }}>
      <Toolbar
        sx={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography>Katiuska Alicea Web Developer</Typography>
        <NavMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
