import {
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import InheritButton from "../InheritButton";

export default function CourseCard({ title, desc, image, id }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="course card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <InheritButton
          title={"Enroll"}
          handleClick={() => {
            console.log(id);
          }}
        />
      </CardActions>
    </Card>
  );
}
