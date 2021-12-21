import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import { InheritButton } from "components";
import { api } from "env";
import { toast, ToastContainer } from "react-toastify";

export default function CourseCard({ title, desc, image, id, uid, dbUser }) {
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
      {dbUser ? (
        dbUser.courses.find((x) => x._id === id) ? (
          <InheritButton title="✅ Enrolled" />
        ) : (
          <InheritButton
            title={"Enroll"}
            handleClick={() => {
              axios.post(`${api.enroll}`, { uid, id }).then((res) => {
                toast.success("Enrolled");
              });
            }}
          />
        )
      ) : (
        <InheritButton
          title={"Enroll"}
          handleClick={() => {
            axios.post(`${api.enroll}`, { uid, id }).then((res) => {
              console.log(res);
            });
          }}
        />
      )}
      <ToastContainer />
    </Card>
  );
}
