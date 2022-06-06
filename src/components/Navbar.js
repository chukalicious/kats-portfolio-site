import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";

import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <>
      <AppBar
        // position="sticky"
        sx={{
          justifyContent: "center",
          //   position: "sticky",
          maxHeight: "auto",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography>Katiuska Alicea Web Developer</Typography>
          <NavMenu />
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </>
  );
};

export default Navbar;
