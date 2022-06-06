import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

const ContactMe = () => {
  return (
    <Box>
      <Typography>Contact Me</Typography>
      <Box>
        <EmailRoundedIcon />{" "}
      </Box>
      <Box>
        <LocationOnRoundedIcon />
      </Box>
      <Box>
        <LocalPhoneRoundedIcon />
      </Box>
    </Box>
  );
};

export default ContactMe;
