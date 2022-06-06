import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import heroImg from "../assets/heroImg.jpeg";
import headshot from "../assets/headshot.png";

const HeroContainer = () => {
  return (
    <Box
      style={{
        bgimage: `url(${heroImg}')`,
        // backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        // backgroundPosition: "center",
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        // border: "red 2px solid",
        minHeight: "50vh",
        marginTop: "4rem",
        // backgroundImage: `url(${heroImg}')`,
        // backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        // backgroundPosition: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          border: "red 1px solid",
          flexDirection: "column",
        }}
      >
        <Avatar
          sx={{
            height: "auto",
            width: "35%",
            objectFit: "cover",
            margin: "1rem auto",
          }}
        >
          <CardMedia component="img" image={headshot}></CardMedia>
        </Avatar>
        <CardContent sx={{ margin: "0 auto", textAlign: "center" }}>
          <Typography>Hi, I'm Kat Alicea</Typography>
          <Typography>Full Stack Web Developer</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HeroContainer;
